import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import {environment} from 'src/environments/environment';
import { ComponentsModule } from '@components/components.module';

import { ScanPage } from './scan.page';
import {CameraService} from '@services/camera/camera.service';
import {PhotoWrapper} from '@services/camera/photo-wrapper';

describe('ScanPage', () => {
  let appWindow: Window = window;
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;
  let mockCameraService = jasmine.createSpyObj(['takePicture'])
  beforeEach(waitForAsync(() => {
    mockCameraService.takePicture.and.returnValue(Promise.resolve(new PhotoWrapper()));
    TestBed.configureTestingModule({
      declarations: [ ScanPage ],
      imports: [IonicModule.forRoot(), ComponentsModule],
      providers: [{provide: CameraService, useValue: mockCameraService}]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have appName and pageName in the title', () => {
    expect(appWindow.document.title).toContain(environment.appName);
    expect(appWindow.document.title).toContain(component.title);
  });

  it('should open the camera when the scan button is clicked', async () => {
    spyOn(component, 'openCamera');
    const debugElement = fixture.debugElement;
    const button = debugElement.query(By.css('#scanButton'));
    button.nativeElement.click();
    await fixture.whenStable();
    expect(component.openCamera).toHaveBeenCalled();
  });

  it('should set components scannedImageSrc as the path returned by the image', async () => {
    const debugElement = fixture.debugElement;
    const button = debugElement.query(By.css('#scanButton'));
    button.nativeElement.click();
    await fixture.whenStable();
    expect(component.scannedImage).toBe((await mockCameraService.takePicture()));
  });

  it('should have an image element with an src of the base64 captured by the camera', async () => {
    const debugElement = fixture.debugElement;
    const button = debugElement.query(By.css('#scanButton'));
    button.nativeElement.click();
    await fixture.whenStable();
    fixture.detectChanges();
    const image = debugElement.query(By.css('ion-img')).nativeElement as HTMLIonImgElement;
    expect(component.scannedImage).toBeDefined();
    expect(image.src).toBe(component.scannedImage?.src);
  });


});
