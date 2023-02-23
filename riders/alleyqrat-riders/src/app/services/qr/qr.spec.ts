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

  it('should go over the steps involved in scanning the qr manually: getting a picture, saving the picture, reading the picture, decoding qr', async () => {
    const qrScanner = new QrManualScanner();
    const takePictureSpy = spyOn<any>(qrScanner, 'takePicture').and.returnValue(
      {}
    );
    const savePictureSpy = spyOn<any>(qrScanner, 'savePicture').and.returnValue(
      { filePath: 'some/path' }
    );
    const readImageContentsSpy = spyOn<any>(
      qrScanner,
      'readImageContents'
    ).and.returnValue({});
    const decodeQrContentsSpy = spyOn<any>(qrScanner, 'decodeQrContents');
    await qrScanner.scanQr();
    expect(takePictureSpy).toHaveBeenCalled();
    expect(savePictureSpy).toHaveBeenCalled();
    expect(readImageContentsSpy).toHaveBeenCalled();
    expect(decodeQrContentsSpy).toHaveBeenCalled();
  });
});
