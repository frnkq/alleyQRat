import { IQRCode } from './qr';
import jsQR from 'jsqr';
import { PNG } from 'pngjs';

export default class QRDecoder {
  public async decode(qr: IQRCode): Promise<string|undefined> {
    return new Promise((resolve, reject) => {
      const image = this.base64toPNG(qr.code.base64);
      const code = jsQR(Uint8ClampedArray.from(image.data), image.width, image.height);
      resolve(code?.data);
    });
  }

  private base64toPNG(base64: string): PNG {
    return PNG.sync.read(this.base64toBuffer(base64));
  }

  private base64toBuffer(base64: string): Buffer {
      return Buffer.from(base64.slice('data:image/png;base64'.length), 'base64')
  }
}
