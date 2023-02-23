import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import QrScanner from './qr-scanner';

export default class QrLibScanner extends QrScanner {
  override scanQr(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await BarcodeScanner.checkPermission({ force: true });
        BarcodeScanner.hideBackground();
        const result = await BarcodeScanner.startScan();
        resolve(result.content);
      } catch (err) {
        reject(err);
      }
    });
  }
}
