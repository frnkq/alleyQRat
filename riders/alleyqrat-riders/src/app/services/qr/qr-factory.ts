import { PlatformService } from '@services/platform/platform.service';
import QrLibScanner from './qr-lib-scanner';
import QrManualScanner from './qr-manual-scanner';
import QrScanner from './qr-scanner';

export default class QrFactory {
  constructor(private platform: PlatformService) {}

  private get cantDecodeFromViewFinder(): boolean {
    return this.platform.isWeb;
  }

  createQrScanner(): QrScanner {
    return this.cantDecodeFromViewFinder
      ? new QrManualScanner()
      : new QrLibScanner();
  }
}
