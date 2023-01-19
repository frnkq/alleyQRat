import {Photo} from "@capacitor/camera";

export class PhotoWrapper {
  photo: Photo|undefined = undefined;;
  public constructor(photo: Photo){
    this.photo = photo;
  }

  public get base64() {
    return `data:image/png;base64,${this.photo?.base64String}`;
  }
}
