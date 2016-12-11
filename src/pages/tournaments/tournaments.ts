import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';

import { EliteApi } from '../../shared/shared'

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(private nav: NavController, private eliteApi: EliteApi, private loadingController : LoadingController) {}

  itemTapped($event, tourney){
    this.nav.push(TeamsPage, tourney);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      // spinner: 'dots'
    });
    loader.present().then(() => {
      this.eliteApi.getTournamets().then(data => {
        this.tournaments = data
        loader.dismiss();
      });
    });
  }
}
