import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StandingsPage, TeamDetailPage } from '../pages';
/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private nav: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeamHomePage Page');
  }

}
