import QRGenerator, {IQR} from './qr-generator';

export default class QR {
  private static generator: QRGenerator = new QRGenerator();

  public static async generateQR(): Promise<IQR> {
    return new Promise(async(resolve, reject)=>{
      try {
        resolve(await this.generator.generateQR());
      }catch(err){
        reject(err);
      }
    });
  }
}
