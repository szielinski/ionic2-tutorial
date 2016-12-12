import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EliteApi } from '../../shared/shared';
import * as _ from 'lodash';
/*
  Generated class for the Standings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {
  allStandings: any[];
  standings: any[];
  team: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    console.log('Hello StandingsPage Page');
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = _.chain(this.standings)
                        .groupBy('division')
                        .toPairs()
                        .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
                        .value();
    console.log('standings', this.standings);
    console.log('division standings', this.allStandings);
  }

}
