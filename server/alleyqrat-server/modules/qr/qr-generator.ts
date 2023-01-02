var QRCode = require('qrcode')

export interface IQR {
  code: {
    base64: String
  }
};

export default class QRGenerator {
  public async generateQR(): Promise<IQR> {
    return new Promise<IQR>(async(resolve, reject)=>{
      const base64 = await QRCode.toDataURL('ASD');
      const qr:IQR = {code: {base64}}
      resolve(qr);
    });
  }
}
