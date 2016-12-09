import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    GamePage, 
    MyTeamsPage, 
    TeamDetailPage, 
    TeamsPage, 
    TournamentsPage
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
    TournamentsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
