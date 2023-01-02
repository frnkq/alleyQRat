import type { NextApiRequest, NextApiResponse } from 'next';
import QR from '@/modules/qr/';
import {IQR} from '@/modules/qr/qr-generator';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IQR>
) {
  res.status(200).json(await QR.generateQR());
}
