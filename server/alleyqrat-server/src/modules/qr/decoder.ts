import { IQRCode } from './qr';
import QrcodeDecoder from 'qrcode-decoder';
var qrDecoder = new QrcodeDecoder();

export default class QRDecoder {
  public async decode(qr: IQRCode) {
    return new Promise((resolve, reject) => {
      resolve("lol");
      qrDecoder
      .decodeFromImage(qr.code.base64)
      .then((decoded) => {
        console.log("HAVE DECODED: ", decoded); 
        resolve(decoded);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
}
