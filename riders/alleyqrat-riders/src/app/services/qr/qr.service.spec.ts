import { TestBed } from '@angular/core/testing';
import { QrService } from './qr.service';

describe('QrService', () => {
  let service: QrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to detect that this test wont be able to scan for a QR', async () => {
    await expectAsync(service.scanQr()).toBeRejectedWith(
      'Not implemented on web'
    );
  });
});
