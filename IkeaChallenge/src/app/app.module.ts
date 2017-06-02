import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TeamPage } from '../pages/team/team';
import { Event1Page } from '../pages/event1/event1';
import { EventsPage } from '../pages/events/events';
import { Challenge1Page } from '../pages/challenge1/challenge1';
import { Challenge2Page } from '../pages/challenge2/challenge2';
import { Challenge3Page } from '../pages/challenge3/challenge3';
import { Challenge4Page } from '../pages/challenge4/challenge4';
import { Challenge5Page } from '../pages/challenge5/challenge5';
import { Challenge6Page } from '../pages/challenge6/challenge6';
import { ChallengePage } from '../pages/challenge/challenge';
import {Level1Page} from '../pages/level1/level1';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TeamPage,
    Event1Page,
    EventsPage,
    Challenge1Page,
    Challenge2Page,
    Challenge3Page,
    Challenge4Page,
    Challenge5Page,
    Challenge6Page,
    ChallengePage,
    Level1Page,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeamPage,
    Event1Page,
    EventsPage,
    Challenge1Page,
    Challenge2Page,
    Challenge3Page,
    Challenge4Page,
    Challenge5Page,
    Challenge6Page,
    ChallengePage,
    Level1Page,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
