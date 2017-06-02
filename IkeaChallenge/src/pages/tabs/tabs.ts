import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChallengePage } from '../challenge/challenge';
import { EventsPage } from '../events/events';
import { TeamPage } from '../team/team';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ChallengePage;
  tab3Root: any = EventsPage;
  tab4Root: any = TeamPage;

  constructor() {

  }
}
