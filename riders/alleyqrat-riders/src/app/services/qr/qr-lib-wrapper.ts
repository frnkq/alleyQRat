import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

export default class QrLibWrapper {
  static async startScan(): Promise<any> {
    return new Promise(async (resolve, reject) => {
       await BarcodeScanner.checkPermission({ force: true });
       BarcodeScanner.hideBackground();
      
       const result = await BarcodeScanner.startScan();
       if (result.hasContent) {
         console.log(result.content);
       }
       resolve(result.content);
    });
  }
}
