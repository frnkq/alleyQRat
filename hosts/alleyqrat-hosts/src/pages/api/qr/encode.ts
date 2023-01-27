import type { NextApiRequest, NextApiResponse } from "next";
import QR from "@modules/qr";
import { IQRCode } from "@modules/qr/qr";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IQRCode>
) {
  res.status(200).json(await QR.encode("lol"));
}
