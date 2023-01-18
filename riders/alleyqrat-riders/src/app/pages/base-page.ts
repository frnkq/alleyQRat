import {Title} from "@angular/platform-browser";
import {environment} from "src/environments/environment";

export interface PageConfig {
  title: string;
}
export class BasePage {
  public title: string = environment.appName;
  constructor(config: PageConfig) {
    this.setTitle(config.title);
  }

  private setTitle(title: string) {
    this.title = `${title} | ${environment.appName}`;
    new Title(document).setTitle(this.title);
  }
}
