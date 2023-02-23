import { Decoder } from '@nuintun/qrcode';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { Directory, Filesystem, ReadFileResult } from '@capacitor/filesystem';
import { Buffer } from 'buffer';
import QrScanner from './qr-scanner';

export default class QrManualScanner extends QrScanner {
  override scanQr(): Promise<any | undefined> {
    return new Promise(async (resolve) => {
      const image = await this.takePicture();
      const { filePath } = await this.savePicture(image, 'scan_name');
      const img = await this.readImageContents(filePath);
      const contents = await this.decodeQrContents(img.data);
      resolve(contents);
    });
  }

  private async takePicture(): Promise<Photo> {
    return new Promise(async (resolve) => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        saveToGallery: true,
      });
      resolve(image);
      const fileName = new Date().getTime() + '.jpeg';
      const savedFileImage = await this.savePicture(image, fileName);
    });
  }

  private async savePicture(
    photo: Photo,
    fileName: string
  ): Promise<{ filePath: string }> {
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
    };
  }

  private async readImageContents(imagePath: string): Promise<ReadFileResult> {
    return new Promise(async (resolve) => {
      const img = await Filesystem.readFile({
        path: imagePath,
        directory: Directory.Data,
      });
      resolve(img);
    });
  }

  private decodeQrContents(imageData: string): any {
    const qrDecoder = new Decoder();
    const qrContents = qrDecoder.scan(imageData);
    return qrContents;
  }

  private convertBlobToBase64(blob: Blob): Promise<any> {
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
