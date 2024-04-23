import { NextApiRequest, NextApiResponse } from "next";
import { readFile, utils } from "xlsx";
import path from "path";

type MedicineInfo = {
    id?: number;
    name?: string;
    chemicalClass?: string;
    habitForming?: boolean;
    therapeuticClass?: string;
    actionClass?: string;
    substitutes?: string;
    sideEffects?: string;
    uses?: string;
};

type ErrorResponse = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MedicineInfo | ErrorResponse>
) {
    const { password, name } = req.query;

    if (password !== process.env.PASSWORD) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    try {
        const file = readFile(
            path.join(process.cwd(), "/src/data/MedicinesFinal.xlsx")
        );

        const sheet = file.Sheets[file.SheetNames[0]];

        const range = utils.decode_range(sheet["!ref"] || "");
        let targetRow = null;

        for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
            const cell = sheet[utils.encode_cell({ r: rowNum, c: 1 })]; // Column B

            if (cell && cell.v === name) {
                targetRow = rowNum;
                break;
            }
        }

        if (targetRow !== null) {
            const medicineInfo: MedicineInfo = {
                name: sheet[utils.encode_cell({ r: targetRow, c: 1 })]?.v,
                chemicalClass: sheet[utils.encode_cell({ r: targetRow, c: 2 })]?.v,
                habitForming: sheet[utils.encode_cell({ r: targetRow, c: 3 })]?.v,
                therapeuticClass: sheet[utils.encode_cell({ r: targetRow, c: 4 })]?.v,
                actionClass: sheet[utils.encode_cell({ r: targetRow, c: 5 })]?.v,
                substitutes: sheet[utils.encode_cell({ r: targetRow, c: 6 })]?.v,
                sideEffects: sheet[utils.encode_cell({ r: targetRow, c: 7 })]?.v,
                uses: sheet[utils.encode_cell({ r: targetRow, c: 8 })]?.v,
            };
            res.status(200).json(medicineInfo);
        } else {
            res.status(404).json({ error: "Medicine not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
}
