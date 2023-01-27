import { Component, OnInit } from '@angular/core';
import { BasePage, PageConfig } from '@pages/base-page';
import { ButtonConfig } from '@components/button/button.component';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage extends BasePage implements OnInit {
  scanButtonConfig: ButtonConfig = {};
  scannedImage: any;
  constructor() {
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
  }
}
