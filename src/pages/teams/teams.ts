import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared'
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {
  teams = [];

  constructor(private nav: NavController, private navParams : NavParams, private elitApi : EliteApi) {}

  ionViewDidLoad() {
    let selectedTournamet = this.navParams.data;

    this.elitApi.getTournamentData(selectedTournamet.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
