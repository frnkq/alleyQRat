import { Component, OnInit } from '@angular/core';
import {BasePage, PageConfig} from '@pages/base-page';
import { ButtonConfig } from '@components/button/button.component';
import {CameraService} from '@services/camera/camera.service';
import {PhotoWrapper} from '@services/camera/photo-wrapper';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage extends BasePage implements OnInit  {
  scanButtonConfig: ButtonConfig = {};
  scannedImage: PhotoWrapper|undefined;
  constructor(private camera: CameraService) {
    const pageConfig: PageConfig = {
      title: "Scan"
    }
    super(pageConfig);

    this.scanButtonConfig= {
      iconName: "scan-outline",
      buttonSize: "large",
      buttonStyle: "font-size: 5em;"
    }
  }

  ngOnInit() {
  }

  async scan() {
    const picture = await this.camera.takePicture();
    this.scannedImage = picture;
  }

}
