import { NextApiRequest, NextApiResponse } from "next";

// amenidades
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};
