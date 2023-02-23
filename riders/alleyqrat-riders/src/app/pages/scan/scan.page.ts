import { Component, OnInit } from '@angular/core';
import { BasePage, PageConfig } from '@pages/base-page';
import { ButtonConfig } from '@components/button/button.component';
import QrFactory from '@services/qr/qr-factory';
import { PlatformService } from '@services/platform/platform.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage extends BasePage implements OnInit {
  scanButtonConfig: ButtonConfig = {};
  scannedImage: any;
  constructor(private platformService: PlatformService) {
    const pageConfig: PageConfig = {
      title: 'Scan',
    };
    super(pageConfig);

    this.scanButtonConfig = {
      iconName: 'scan-outline',
      buttonSize: 'large',
      buttonStyle: 'font-size: 5em;',
    };
  }

  ngOnInit() {}

  async scan() {
    const qrFactory = new QrFactory(this.platformService);
    await qrFactory.createQrScanner().scanQr();
  }
}
