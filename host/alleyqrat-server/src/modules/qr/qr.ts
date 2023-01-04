import QREncoder from './encoder';
import QRDecoder from './decoder';

export interface IQRCode {
  code: {
    base64: string
  }
};

export default class QR {
  private static encoder: QREncoder = new QREncoder();
  private static decoder: QRDecoder = new QRDecoder();

  public static async generate(data: string): Promise<IQRCode> {
    return new Promise(async (resolve, reject)=>{
      try {
        resolve(await this.encoder.encode(data));
      } catch (err) {
        reject(err);
      }
    });
  }

  public static async decode(qrCode: IQRCode) {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await this.decoder.decode(qrCode));
      } catch (err){
        reject(err);
      }
    });
  }

}
