import { NextApiRequest, NextApiResponse } from "next";
import getSpotifyAccessToken from "@/utils/functions/getSpotify";

type ESPInfo = {
    title: string;
    artist: string;
    album: string;
    color: [number, number, number];
    duration: string;
    progress: string;
    paused: string;
    volume: number;
    shuffle: boolean;
    loop: string;
}

type Error = {
    error: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ESPInfo | Error>
) {
    const { password } = req.query;

    if (password !== process.env.PASSWORD) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    try {
        const accessToken = await getSpotifyAccessToken();

        const response = await fetch(
            `https://api.spotify.com/v1/me/player`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (response.ok) {
            const current = await response.json();

            const dominantColor = await fetch(`https://benzhou.tech/api/getColor/${current.item.album.images[0].url.split("/")[4]}`).then(res => res.json());
            console.log(current);
            res.status(200).json({
                title: current.item.name,
                artist: current.item.artists[0].name,
                album: current.item.album.name,
                color: dominantColor.answer,
                duration: String(Math.round(current.item.duration_ms / 1000)),
                progress: String(Math.round(current.progress_ms / 1000)),
                paused: String(!current.is_playing),
                volume: current.device.volume_percent,
                shuffle: current.shuffle_state,
                loop: current.repeat_state
            });
        } else {
            const errorMessage = await response.text();
            res.status(response.status).json({ error: errorMessage });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
}
