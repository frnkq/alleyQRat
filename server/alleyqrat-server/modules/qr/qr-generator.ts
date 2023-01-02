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
      console.log(base64);
      const qr:IQR = {code: {base64}}
      resolve(qr);
    });
  }
}
