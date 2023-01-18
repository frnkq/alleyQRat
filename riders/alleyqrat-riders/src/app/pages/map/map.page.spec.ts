import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {environment} from 'src/environments/environment';

import { MapPage } from './map.page';

describe('MapPage', () => {
  let appWindow: Window = window;
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapPage);
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
