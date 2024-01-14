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

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const accessToken = await getSpotifyAccessToken();

        const response = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
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
            res.status(200).json(currentlyPlaying);
        } else {
            const errorMessage = await response.text();
            res.status(response.status).json({ error: errorMessage });
        }
    } catch (error) {
        console.error("Error fetching currently playing track", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
