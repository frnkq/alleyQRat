interface TabOptions {
  tabName: string,
  title: string,
  icon?: string,
  activeIcon: string,
  inactiveIcon: string,
}

export class Tab implements TabOptions {
  tabName: string;
  title: string;
  icon: string;
  activeIcon: string;
  inactiveIcon: string;

  constructor(tabOptions: TabOptions){
    this.tabName = tabOptions.tabName;
    this.title = tabOptions.title;
    this.icon = tabOptions.inactiveIcon;
    this.activeIcon = tabOptions.activeIcon;
    this.inactiveIcon = tabOptions.inactiveIcon;
  }

  markAsActive(): void {
    this.icon = this.activeIcon;
  }

  markAsInactive(): void {
    this.icon = this.inactiveIcon;
  }
}

