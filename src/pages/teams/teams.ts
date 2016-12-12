import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import * as _ from 'lodash';
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
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];

  constructor(private nav: NavController, private navParams : NavParams, private elitApi : EliteApi, private loadingController: LoadingController) {}

  ionViewDidLoad() {
    let selectedTournamet = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting the data...'
    });

    loader.present().then(() => {
      this.elitApi.getTournamentData(selectedTournamet.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = 
          _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
          .value();
        this.teams = this.allTeamDivisions;

        console.log('division teams', this.teams);
        loader.dismiss();
      });
    });
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
