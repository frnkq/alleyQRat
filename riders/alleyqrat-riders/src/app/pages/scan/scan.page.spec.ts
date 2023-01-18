import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {environment} from 'src/environments/environment';

import { ScanPage } from './scan.page';

describe('ScanPage', () => {
  let appWindow: Window = window;
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPage ],
      imports: [IonicModule.forRoot()],
      providers: []
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

});
