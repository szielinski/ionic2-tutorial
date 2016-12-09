import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeams } from './my-teams';
import { Game } from './game';
import { Teams } from './teams';
import { Tournaments } from './tournaments';
import { TeamDetail } from './team-detail';

@NgModule({
  declarations: [
    MyApp,
    MyTeams,
    Game,
    Teams,
    Tournaments,
    TeamDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeams,
    Game,
    Teams,
    Tournaments,
    TeamDetail
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
