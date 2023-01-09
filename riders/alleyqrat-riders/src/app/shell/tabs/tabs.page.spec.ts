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

  it('should set active icon only for active tab', () =>{
    const activeIconNames = component.tabs.map(tab => tab.activeIcon);
    const inactiveIconNames = component.tabs.map(tab => tab.inactiveIcon);
    component.tabs.forEach((tab, index) => {
      const navigationEvent = new NavigationEnd(index, tab.tabName, '');
      component.changeIconForActiveTab(navigationEvent);
      fixture.detectChanges(); 
      let inactive = 0;
      let active = 0;
      const icons = Array.from(fixture.nativeElement.querySelectorAll('ion-icon') as NodeList) as Array<HTMLIonIconElement>;
      icons.forEach((icon) =>{
        const isInactive = inactiveIconNames.indexOf(icon.name?.toString() as string) !== -1;
        const isActive = activeIconNames.indexOf(icon.name?.toString() as string) !== -1;
        if(isInactive) inactive++;
        if(isActive) active++;
      });
      expect(inactive).toBe(component.tabs.length- 1);
      expect(active).toBe(1);
    });
  });
});
