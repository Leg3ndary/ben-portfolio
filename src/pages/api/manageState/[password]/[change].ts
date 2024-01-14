import { NextApiRequest, NextApiResponse } from "next";
import getSpotifyAccessToken from "@/utils/functions/getSpotify";

type ESPInfo = {
    answer: string;
};

type Error = {
    error: string;
};

const changes = ["playPause", "skip", "back", "vinc", "vdec"];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ESPInfo | Error>
) {
    const { password, change } = req.query;

    if (password !== process.env.PASSWORD) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    if (!changes.includes(change as string)) {
        res.status(400).json({ error: "Invalid change" });
        return;
    }

    try {
        const accessToken = await getSpotifyAccessToken();

        let url = "";
        let metho = "";

        if (change === "playPause") {
            const response = await fetch(
                `https://api.spotify.com/v1/me/player?market=CA`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (response.ok) {
                const responseData = await response.json();

                if (!responseData.is_playing) {
                    // If not playing, set URL to play
                    url = "https://api.spotify.com/v1/me/player/play";
                    metho = "PUT";
                } else {
                    // If playing, set URL to pause
                    url = "https://api.spotify.com/v1/me/player/pause";
                    metho = "PUT";
                }
            } else {
                res.status(response.status).json({
                    error: "Error fetching player status",
                });
                return;
            }
        } else if (change === "skip") {
            url = `https://api.spotify.com/v1/me/player/next`;
            metho = "POST";
        } else if (change === "back") {
            url = `https://api.spotify.com/v1/me/player/previous`;
            metho = "POST";
        }
        // else if (change === "vinc") {
        //     url = `https://api.spotify.com/v1/me/player/volume?volume_percent=100`;
        // } else if (change === "vdec") {
        //     url = `https://api.spotify.com/v1/me/player/volume?volume_percent=0`;
        // }
        const response = await fetch(url, {
            method: metho,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        res.status(200).json({ answer: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
}
