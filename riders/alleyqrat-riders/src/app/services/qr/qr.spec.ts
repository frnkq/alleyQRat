import { TestBed } from '@angular/core/testing';
import QrFactory from './qr-factory';

import { PlatformService } from '../platform/platform.service';
import QrManualScanner from './qr-manual-scanner';
import QrLibScanner from './qr-lib-scanner';

describe('PlatformService', () => {
  let platformService: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    platformService = TestBed.inject(PlatformService);
  });

  it('should generate a QrManualScanner instance when platform is web', () => {
    spyOnProperty(platformService, 'isWeb').and.returnValue(true);
    const qrFactory = new QrFactory(platformService);
    const scanner = qrFactory.createQrScanner();
    expect(scanner).toBeInstanceOf(QrManualScanner);
  });

  it('should generate a QrLibScanner instance when platform is not web', () => {
    spyOnProperty(platformService, 'isWeb').and.returnValue(false);
    const qrFactory = new QrFactory(platformService);
    const scanner = qrFactory.createQrScanner();
    expect(scanner).toBeInstanceOf(QrLibScanner);
  });

  it('should throw an error if I try to scan with the QrLibScanner from a web platform', async () => {
    spyOnProperty(platformService, 'isWeb').and.returnValue(false);
    const qrFactory = new QrFactory(platformService);
    const scanner = qrFactory.createQrScanner();
    await expectAsync(scanner.scanQr()).toBeRejected();
  });

});
