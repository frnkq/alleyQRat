import { Component, OnInit } from '@angular/core';
import {BasePage, PageConfig} from '@pages/base-page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {


  constructor() {
    const config: PageConfig = {
      title: "Home"
    }
    super(config);
  }

  ngOnInit() {
  }

}
