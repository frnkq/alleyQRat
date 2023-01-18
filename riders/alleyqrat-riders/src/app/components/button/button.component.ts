import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() iconName: string|undefined;
  @Input() iconPath: string|undefined;
  constructor() { }

  ngOnInit() {
    this.validateInputProperties();
  }

  private validateInputProperties() {
    this.hasEitherIconNameOrPathButNotBoth();
  }

  private hasEitherIconNameOrPathButNotBoth() {
    if(this.iconPath !== undefined && this.iconName !== undefined) {
      throw Error("Icon cannot have both an icon name and an icon path");
    }
  }

}
