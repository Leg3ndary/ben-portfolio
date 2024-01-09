import type { NextApiRequest, NextApiResponse } from "next";
import { getColorFromURL } from "color-thief-node";

type Data = {
    answer: number[];
};

// function rgbToHex(rgb: number[]) {
//     const hex =
//         "#" +
//         rgb.map((x) => {
//             const hex = x.toString(16);
//             return hex.length === 1 ? "0" + hex : hex;
//         });
//     return hex.replaceAll(",", "");
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const hash = req.query.hash as string;
    const url = `https://i.scdn.co/image/${hash}`;

    // const hex = rgbToHex(await getColorFromURL(url));

    let color = await getColorFromURL(url);

    res.status(200).json({ answer: color });
}
