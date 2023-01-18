import { Component, OnInit } from '@angular/core';
import {BasePage, PageConfig} from '@pages/base-page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage extends BasePage implements OnInit {

  constructor() {
    const config: PageConfig = {
      title: "Settings"
    }
    super(config);
  }

  ngOnInit() {
  }

}
