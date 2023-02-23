import { Decoder } from '@nuintun/qrcode';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import QrScanner from './qr-scanner';
import { Buffer } from 'buffer';

export default class QrManualScanner extends QrScanner {
  override scanQr(): Promise<any | undefined> {
    return new Promise(async (resolve) => {
      const { filePath } = await this.takePicture();
      if (filePath == undefined) resolve(undefined);
      // const qrContents = await this.getrQrContentsFromBase64(webPath as string);
      const qrDecoder = new Decoder();
      console.log('filepath here', filePath);
      console.log('filepath here2', filePath);
      const img = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });
      console.log(atob(img.data));
      console.log('image from file', img);
      // const cont = qrDecoder.scan(filePath as string);
      resolve(img);
    });
  }

  private async takePicture(): Promise<any> {
    return new Promise(async (resolve) => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        saveToGallery: true,
      });
      const fileName = new Date().getTime() + '.jpeg';
      const savedFileImage = await this.savePicture(image, fileName);
      resolve(savedFileImage);
    });
  }
  async savePicture(
    photo: Photo,
    fileName: string
  ): Promise<{ filePath: string; webviewPath: string }> {
    let base64Data: string;

    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = (await this.convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    return {
      filePath: `${fileName}`,
      webviewPath: photo.webPath as string,
    };
  }

  convertBlobToBase64(blob: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }

  private async getrQrContentsFromBase64(base64: string): Promise<any> {
    return new Promise((resolve) => {
      console.log('in', base64);
      let content = Buffer.from(base64, 'base64').toString('binary');
      content = JSON.parse(content);
      // const content = JSON.parse(atob(base64));
      console.log('out', content);
      resolve({});
    });
  }
}
