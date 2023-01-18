import { Component, OnInit } from '@angular/core';
import {BasePage, PageConfig} from '@pages/base-page';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage extends BasePage implements OnInit  {
  constructor() {
    const config: PageConfig = {
      title: "Scan"
    }
    super(config);
  }



  ngOnInit() {
  }

}
