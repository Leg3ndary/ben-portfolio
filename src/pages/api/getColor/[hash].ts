import type { NextApiRequest, NextApiResponse } from "next";
import { getColorFromURL } from "color-thief-node";

type Data = {
    answer: number[];
};

function findNearestColor(rgbArray: number[]): number[] {
    const colors: number[][] = [
        [255, 0, 0],
        [255, 125, 0],
        [255, 255, 0],
        [125, 255, 0],
        [0, 255, 0],
        [0, 255, 125],
        [0, 255, 255],
        [0, 125, 255],
        [0, 0, 255],
        [125, 0, 255],
        [255, 0, 255],
        [255, 0, 125],
    ];

    let minDistance: number = Infinity;
    let closestColor: number[] = [];

    colors.forEach((color: number[]) => {
        const distance: number = Math.sqrt(
            Math.pow(rgbArray[0] - color[0], 2) +
                Math.pow(rgbArray[1] - color[1], 2) +
                Math.pow(rgbArray[2] - color[2], 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    });

    return closestColor;
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const hash = req.query.hash as string;
    const url = `https://i.scdn.co/image/${hash}`;

    let colors = await getColorFromURL(url);

    const color = findNearestColor(colors);

    res.status(200).json({ answer: color });
}
