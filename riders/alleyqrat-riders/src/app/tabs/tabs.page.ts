import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

interface ITab {
  tabName: string,
  title: string,
  icon?: string,
  activeIcon: string,
  inactiveIcon: string
}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public tabs: Array<ITab> = [
    {
      tabName: 'home',
      title: 'Home',
      activeIcon: 'home',
      inactiveIcon: 'home-outline'
    },
    {
      tabName: 'map',
      title: 'Map',
      activeIcon: 'map',
      inactiveIcon: 'map-outline'
    },
    {
      tabName: 'scan',
      title: 'Scan',
      activeIcon: 'qr-code',
      inactiveIcon: 'qr-code-outline'
    },
    {
      tabName: 'settings',
      title: 'Settings',
      activeIcon: 'settings',
      inactiveIcon: 'settings-outline'
    }
  ].map((tab: ITab) => {
    tab.icon = tab.inactiveIcon;
    return tab;
  });

  constructor(private router: Router) {
    this.router.events.subscribe({
      next: this.changeIconForActiveTab.bind(this)
    });
  }

  public changeIconForActiveTab(event: Event){
    const isUrlReady = event instanceof NavigationEnd;
    if(!isUrlReady) return;
    const tab = this.getTabFromUrl(event.urlAfterRedirects || event.url);
    this.markTabAsActive(tab);
    this.markTabsAsInactiveExcept(tab);
  }

  private markTabsAsInactiveExcept(tab: ITab): void {
    const indexOfCurrentTab = this.tabs.indexOf(tab);
    this.tabs.map((tab, index) => {
      const isAlreadyInactive = tab.icon == tab.activeIcon;
      const isNotCurrentTab = index != indexOfCurrentTab;
      if(isAlreadyInactive && isNotCurrentTab)
        tab.icon = tab.inactiveIcon;
    })
  }

  private markTabAsActive(tab: ITab): void {
    const tabIndex = this.tabs.indexOf(tab);
    this.tabs[tabIndex].icon = tab.activeIcon; 
  }


  private getTabFromUrl(url: string): ITab {
    const tabName = (url.split('/').pop() as string);
    const tab = (this.tabs.filter(tab => tab.tabName == tabName).pop() as ITab);
    return tab;
  }
}
