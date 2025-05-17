import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
    alive: boolean;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: "Hi there...", alive: true });
}
