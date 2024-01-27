import { NextApiRequest, NextApiResponse } from "next";
import getSpotifyAccessToken from "@/utils/functions/getSpotify";

type ESPInfo = {
    answer: string;
};

type Error = {
    error: string;
};

const changes = ["playPause", "skip", "back", "vinc", "vdec", "loop", "shuffle"];

async function getPlayerData(res: NextApiResponse, accessToken: string) {
    const response = await fetch(
        `https://api.spotify.com/v1/me/player`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }
    else {
        res.status(response.status).json({
            error: "Error fetching player status",
        });
        return;
    }
}

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
            const responseData = await getPlayerData(res, accessToken);
            if (!responseData.is_playing) {
                url = "https://api.spotify.com/v1/me/player/play";
                metho = "PUT";
            } else {
                url = "https://api.spotify.com/v1/me/player/pause";
                metho = "PUT";
            }
        } else if (change === "skip") {
            url = `https://api.spotify.com/v1/me/player/next`;
            metho = "POST";
        } else if (change === "back") {
            url = `https://api.spotify.com/v1/me/player/previous`;
            metho = "POST";
        }
        else if (change === "vinc" || change === "vdec") {
            const responseData = await getPlayerData(res, accessToken);
            let volume = responseData.device.volume_percent;
            if (change === "vinc") {
                volume += 10;
                volume = Math.min(volume, 100);
            } else {
                volume -= 10;
                volume = Math.max(volume, 0);
            }
            
            url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}`;
            metho = "PUT";
        } else if (change === "loop") {
            const responseData = await getPlayerData(res, accessToken);
            let state = responseData.repeat_state;
            if (state === "track") {
                state = "context";
            } else if (state === "context") {
                state = "off";
            } else {
                state = "track";
            }
            url = `https://api.spotify.com/v1/me/player/repeat?state=${state}`;
            metho = "PUT"
        } else if (change === "shuffle") {
            const responseData = await getPlayerData(res, accessToken);
            let shuffle = responseData.shuffle_state;
            url = `https://api.spotify.com/v1/me/player/shuffle?state=${!shuffle}`;
            metho = "PUT";
        }

        await fetch(url, {
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
