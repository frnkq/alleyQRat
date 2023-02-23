import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

type PlatformType = string &
  (
    | 'ios'
    | 'ipad'
    | 'iphone'
    | 'android'
    | 'phablet'
    | 'tablet'
    | 'cordova'
    | 'capacitor'
    | 'electron'
    | 'pwa'
    | 'mobile'
    | 'mobileweb'
    | 'desktop'
    | 'hybrid'
  );

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private platform: Platform) {}

  public get isWeb(): boolean {
    return (
      this.platform.is('pwa') ||
      this.platform.is('desktop') ||
      this.platform.is('mobileweb') ||
      this.platform.is('cordova')
    );
  }

  public get isSmartphone(): boolean {
    return this.platform.is('android') || this.platform.is('ios');
  }
}
