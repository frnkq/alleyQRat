import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button : HTMLIonButtonElement;
  let icon: HTMLIonIconElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ], imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture
                          .nativeElement
                          .getElementsByTagName('ion-button')
                          .item(0) as HTMLIonButtonElement;
    icon = button.childNodes.item(0) as HTMLIonIconElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have only one icon tied to the button', () => {
    const buttons = fixture.nativeElement.getElementsByTagName('ion-icon');
    expect(buttons.length).toBe(1);
  });

  it('should have only one button tied to the button', () => {
    const buttons = fixture.nativeElement.getElementsByTagName('ion-button');
    expect(buttons.length).toBe(1);
  });

  it('should have src attribute if icon is a path', () => {
    if(component.config.iconPath !== undefined){
      expect(icon.src).not.toBeUndefined();
    } else {
      expect(icon.src).toBeUndefined();
    }
  });

  it('should have name attribute if icon is an ionic icon name', () => {
    if(component.config.iconName !== undefined){
      expect(icon.name).not.toBeUndefined();
    } else {
      expect(icon.name).toBeUndefined();
    }
  });

  it('should have an icon tied to the button', () => {
    expect(icon.tagName.toLowerCase()).toBe('ion-icon');
    expect(icon.name || icon.src).toBe(component.config.iconName || component.config.iconPath);
  });

  it('should have either a name or a path but not both', () => {
    component.config.iconPath = '/path/to/icon';
    component.config.iconName = 'some-icon';
    expect(()=>{component.ngOnInit()}).toThrowError();
  });

  it('should have the icon set as input priority', () => {
    component.config = { buttonSize: "large" }
    fixture.detectChanges();
    expect(button.size?.toString()).toBe(component.config.buttonSize);
    expect(icon.tagName.toLowerCase()).toBe('ion-icon');
    expect(icon.name || icon.src).toBe(component.config.iconName || component.config.iconPath);
  });

  it('shuld have the buttonStyle attribute if size is passed', () => {
    component.config.buttonStyle = "background-color: red;"
    fixture.detectChanges();
    expect(button.style.backgroundColor).toBe('red');
  });
});
