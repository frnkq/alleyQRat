import { TestBed } from '@angular/core/testing';

import { CameraService } from './camera.service';
import {PhotoWrapper} from './photo-wrapper';

describe('CameraService', () => {
  let service: CameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should take a picture and return a base64 string', async () => {
    spyOn(service, 'takePicture').and.returnValue(Promise.resolve(new PhotoWrapper()));
    const base64image = (await service.takePicture()).base64;
    expect(base64image).toContain('data:image/png;base64');
  });
});
