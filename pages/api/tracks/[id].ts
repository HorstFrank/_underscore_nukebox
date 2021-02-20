// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../server/db.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const track = db.tracks.find((track) => track.id === +id);
  if (!track) {
    return res.status(404).json({
      status: 404,
      error: "Song not found. Try it again with a valid Request or ask Leon.",
    });
  }
  res.status(200).json(track);
};
