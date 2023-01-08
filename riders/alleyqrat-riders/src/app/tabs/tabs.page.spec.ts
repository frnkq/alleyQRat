import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NavigationEnd} from '@angular/router';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an ion-tab-bar element', () => {
    const tabBar = fixture.nativeElement.querySelector('ion-tab-bar');
    expect(tabBar).toBeDefined();
  });

  it('should have the ion-tab-bar at the bottom', () =>{
    const tabBar = fixture.nativeElement.querySelector('ion-tab-bar') as HTMLIonTabBarElement;
    const tabPosition = tabBar.getAttribute('slot');
    expect(tabPosition).toBeDefined();
    expect(tabPosition).toBe('bottom');
  });

  it('should have the ion-tab-bar with the same number of children as tabs defined', () =>{
    const tabBar = fixture.nativeElement.querySelector('ion-tab-bar');
    const tabChildCount = (tabBar.childElementCount as number);
    expect(tabChildCount).toBe(component.tabs.length);
  });

  it('should have all ion-tab-button with icons and labels only', () =>{
    const tabButtons = (fixture.nativeElement.querySelectorAll('ion-tab-button') as Array<HTMLIonTabButtonElement>);
    tabButtons.forEach((button) => {
      const icon = button.childNodes[0] as HTMLElement;
      const label = button.childNodes[1] as HTMLElement;
      expect(button.childElementCount).toBe(2);
      expect(icon.tagName.toLowerCase()).toBe('ion-icon');
      expect(label.tagName.toLowerCase()).toBe('ion-label');
    });
  });

  it('should set active icon only for active tab', () => {
    const navigationEvent = new NavigationEnd(0, '/', '/home');
    component.changeIconForActiveTab(navigationEvent);
    fixture.detectChanges();
    const icons = Array.from(fixture.nativeElement.querySelectorAll('ion-icon') as NodeList) as Array<HTMLIonIconElement>;
    let inactiveIcons = icons.filter((icon: HTMLIonIconElement) => icon.name?.toString().indexOf('-outline') !== -1).length;
    let activeIcon = icons.filter((icon: HTMLIonIconElement) => icon.name?.toString().indexOf('-outline') == -1).length;
    expect(inactiveIcons).toBe(component.tabs.length - 1);
    expect(activeIcon).toBe(1);

    const navigationEvent2 = new NavigationEnd(0, '/map', '');
    component.changeIconForActiveTab(navigationEvent2);
    fixture.detectChanges();
    inactiveIcons = icons.filter((icon: HTMLIonIconElement) => icon.name?.toString().indexOf('-outline') !== -1).length;
    activeIcon = icons.filter((icon: HTMLIonIconElement) => icon.name?.toString().indexOf('-outline') == -1).length;
    expect(inactiveIcons).toBe(component.tabs.length - 1);
    expect(activeIcon).toBe(1);
  });

});
