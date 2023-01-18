import { Component, OnInit } from '@angular/core';
import {BasePage, PageConfig} from '@pages/base-page';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage extends BasePage implements OnInit {

  constructor() {
    const config: PageConfig = {
      title: "Map"
    }
    super(config);
  }

  ngOnInit() {
  }

}
