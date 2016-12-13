import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage, TeamHomePage, StandingsPage, MapPage } from '../pages/pages';

import { HttpModule } from '@angular/http';

import { EliteApi, UserSettings } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    GamePage, 
    MapPage,
    MyTeamsPage, 
    TeamDetailPage, 
    TeamsPage, 
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage, 
    MapPage,
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
