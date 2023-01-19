import { Component, OnInit, Input } from '@angular/core';

export interface ButtonConfig {
  iconName?: string|undefined;
  iconPath?: string|undefined;
  buttonSize?: string|undefined;
  buttonStyle?: string|undefined;
};

@Component({
  selector: 'app-button',
   templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() config: ButtonConfig = {};

  constructor() { }

  ngOnInit() {
    this.validateInputProperties();
  }

  private validateInputProperties() {
    this.hasEitherIconNameOrPathButNotBoth();
  }

  private hasEitherIconNameOrPathButNotBoth() {
    if(this.config.iconPath !== undefined && this.config.iconName !== undefined) {
      throw Error("Icon cannot have both an icon name and an icon path");
    }
  }

}
