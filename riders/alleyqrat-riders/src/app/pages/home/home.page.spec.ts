import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {environment} from 'src/environments/environment';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let appWindow: Window = window;
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
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
