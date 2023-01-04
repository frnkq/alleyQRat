import QRCode from 'qrcode';
import { IQRCode } from "./qr";

export default class QREncoder {
  public async encode(data: string): Promise<IQRCode> {
    return new Promise<IQRCode>(async (resolve)=>{
      const base64 = await QRCode.toDataURL(data);
      const qr:IQRCode = { code: { base64 } }
      resolve(qr);
    });
  }
}
