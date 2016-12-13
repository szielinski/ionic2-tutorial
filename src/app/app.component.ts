import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyTeamsPage, TeamHomePage, TournamentsPage } from '../pages/pages'
import { EliteApi, UserSettings } from '../shared/shared';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];
  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              private userSettings: UserSettings,
              private eliteApi: EliteApi,
              private loadingController: LoadingController,
              private events: Events) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.refreshFavorites();
      this.events.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }

  refreshFavorites(){
    this.userSettings.getAllFavorites().then(fav => this.favoriteTeams = fav);
  }

  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTeam(team){
    let loader = this.loadingController.create({
      content: "Getting data...",
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(team.tournamentId).subscribe(l => this.nav.push(TeamHomePage, team.team));
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
