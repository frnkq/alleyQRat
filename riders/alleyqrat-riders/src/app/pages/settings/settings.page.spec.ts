import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {environment} from 'src/environments/environment';

import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let appWindow: Window = window;
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
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
