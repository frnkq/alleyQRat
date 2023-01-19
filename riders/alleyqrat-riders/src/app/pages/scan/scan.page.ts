import { Component, OnInit } from '@angular/core';
import {BasePage, PageConfig} from '@pages/base-page';
import { ButtonConfig } from '@components/button/button.component';
import {CameraService} from '@services/camera/camera.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage extends BasePage implements OnInit  {
  scanButtonConfig: ButtonConfig = {};
  base64: string = "";
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

  async openCamera() {
    const picture = await this.camera.takePicture();
    console.log("having this.", this.base64);
  }


}
