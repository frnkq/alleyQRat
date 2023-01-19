import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { PhotoWrapper } from './photo-wrapper';

export class CameraWrapper {
  public constructor(){}

  public async takePicture(): Promise<PhotoWrapper> {
    return new Promise(async (resolve, reject) => {
      const cameraOptions = {
        resultType: CameraResultType.Base64,
        quality: 90,
        webUseInput: false
      };
      try {
        const photo = await Camera.getPhoto(cameraOptions);
        resolve(new PhotoWrapper(photo));
      } catch(err) {
        reject(err);
      }
    });
  }
}
