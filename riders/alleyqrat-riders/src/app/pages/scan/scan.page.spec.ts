import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from '@components/components.module';

import { ScanPage } from './scan.page';

describe('ScanPage', () => {
  let appWindow: Window = window;
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ScanPage],
      imports: [IonicModule.forRoot(), ComponentsModule],
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
    spyOn(component, 'scan');
    const debugElement = fixture.debugElement;
    const button = debugElement.query(By.css('#scanButton'));
    button.nativeElement.click();
    await fixture.whenStable();
    expect(component.scan).toHaveBeenCalled();
  });
});
