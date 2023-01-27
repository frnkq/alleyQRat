import { Injectable } from '@angular/core';
import { PlatformService } from '@services/platform/platform.service';
import QrLibWrapper from './qr-lib-wrapper';

@Injectable({
  providedIn: 'root',
})
export class QrService {
  constructor(private platform: PlatformService) {}

  async scanQr(): Promise<any> {
    if (this.platform.isWeb) {
      return Promise.reject('Not implemented on web');
    } else {
      return QrLibWrapper.startScan();
    }
  }
}
