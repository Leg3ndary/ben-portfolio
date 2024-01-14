import { NextApiRequest, NextApiResponse } from "next";

let accessToken = "";
let tokenExpiration = 0;

async function getSpotifyAccessToken() {
    const { SPOTIFY_CLIENTID, SPOTIFY_SECRET, SPOTIFY_REFRESHTOKEN } =
        process.env;

    if (Date.now() < tokenExpiration) {
        return accessToken;
    }

    const authString = Buffer.from(
        `${SPOTIFY_CLIENTID}:${SPOTIFY_SECRET}`
    ).toString("base64");

    const tokenResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
                Authorization: `Basic ${authString}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: SPOTIFY_REFRESHTOKEN || "",
            }),
        }
    );

    const tokenData = await tokenResponse.json();

    accessToken = tokenData.access_token;
    tokenExpiration = Date.now() + tokenData.expires_in * 1000;

    return accessToken;
};

type ESPInfo = {
    title: string;
    artist: string;
    album: string;
    color: [number, number, number];
    duration: number;
    progress: number;

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
            `https://api.spotify.com/v1/me/player/currently-playing?market=CA`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (response.ok) {
            const responseData = await response.text();

            if (!responseData.trim()) {
                res.status(404).json({ error: "No currently playing track" });
                return;
            }

            const currentlyPlaying = JSON.parse(responseData);

            const dominantColor = await fetch(`https://benzhou.tech/api/getColor/${currentlyPlaying.item.album.images[0].url.split("/")[4]}`).then(res => res.json());

            res.status(200).json({
                title: currentlyPlaying.item.name,
                artist: currentlyPlaying.item.artists[0].name,
                album: currentlyPlaying.item.album.name,
                color: dominantColor.answer,
                duration: currentlyPlaying.item.duration_ms,
                progress: currentlyPlaying.progress_ms,
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
