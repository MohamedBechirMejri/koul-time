/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) res.status(500).json({ error: "No API Key!" });

  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCGpWghgdImxgFP8cvSgwCSw&maxResults=1&order=date&type=video&key=${key}`
  );
  const channel = await data.json();
  const video = channel.items[0];

  res
    .status(200)
    .json({ url: `https://www.youtube.com/watch?v=${video.id.videoId}` });
}
