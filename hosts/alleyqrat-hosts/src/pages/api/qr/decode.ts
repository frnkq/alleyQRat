import type { NextApiRequest, NextApiResponse } from "next";
import QR from "@modules/qr";
import _ from "lodash";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") res.status(405).end();
  if (!_.has(req.body, "code.base64")) res.status(422).end();

  try {
    const decoded = await QR.decode(req.body);
    res.status(200).json({});
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
}
