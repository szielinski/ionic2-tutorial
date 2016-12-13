import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage, TeamHomePage, StandingsPage } from '../pages/pages';

import { HttpModule } from '@angular/http';

import { EliteApi, UserSettings } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    GamePage, 
    MyTeamsPage, 
    TeamDetailPage, 
    TeamsPage, 
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage, 
    MyTeamsPage, 
    TeamDetailPage, 
    TeamsPage, 
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    Storage,
    UserSettings
  ]
})
export class AppModule {}
