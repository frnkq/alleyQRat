import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public tabs: Array<Tab> = [
    new Tab({
      tabName: 'home',
      title: 'Home',
      activeIcon: 'home',
      inactiveIcon: 'home-outline',
    }),
    new Tab({
      tabName: 'map',
      title: 'Map',
      activeIcon: 'map',
      inactiveIcon: 'map-outline',
    }),
    new Tab({
      tabName: 'scan',
      title: 'Scan',
      activeIcon: 'qr-code',
      inactiveIcon: 'qr-code-outline',
      onLoad: () => {
        console.log('hi bro');
      },
    }),
    new Tab({
      tabName: 'settings',
      title: 'Settings',
      activeIcon: 'settings',
      inactiveIcon: 'settings-outline',
    }),
  ];

  constructor(private router: Router) {
    this.router.events.subscribe({
      next: this.onRouteEvent.bind(this),
    });
  }

  private onRouteEvent(event: Event) {
    const isUrlReady = event instanceof NavigationEnd;
    if (!isUrlReady) return;
    this.onRouteNavigationEnd(event);
  }

  private onRouteNavigationEnd(event: NavigationEnd) {
    this.changeIconForActiveTab(event);
    this.executeMethodOnPageChange(event);
  }

  public executeMethodOnPageChange(event: NavigationEnd) {
    const tab = this.getTabFromUrl(event.urlAfterRedirects || event.url);
    if (!tab.onLoad) return;
    tab.onLoad();
  }

  public changeIconForActiveTab(event: NavigationEnd) {
    const tab = this.getTabFromUrl(event.urlAfterRedirects || event.url);
    this.updateTabIconsBasedOnState(tab);
  }

  private getTabFromUrl(url: string): Tab {
    const tabName = url.split('/').pop() as string;
    const tab = this.tabs.filter((tab) => tab.tabName == tabName).pop() as Tab;
    return tab;
  }

  private updateTabIconsBasedOnState(activeTab: Tab): void {
    const tabIndex = this.tabs.indexOf(activeTab);
    this.tabs.forEach((tab, index) => {
      if (tabIndex == index) {
        tab.markAsActive();
      } else {
        tab.markAsInactive();
      }
    });
  }
}
