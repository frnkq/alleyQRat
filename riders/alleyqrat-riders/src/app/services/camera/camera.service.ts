import { Injectable } from '@angular/core';
import { CameraWrapper } from './camera-wrapper';
import { PhotoWrapper } from './photo-wrapper';


@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private camera: CameraWrapper;

  constructor() { 
    this.camera = new CameraWrapper();
  }
  
  async takePicture(): Promise<PhotoWrapper> {
    return new Promise(async(resolve, reject) => {
      try {
        const photo = await this.camera.takePicture();
        resolve(photo);
      }catch(err){
        reject(err);
      }
    });
  }

}
