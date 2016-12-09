import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamDetailPage } from '../pages';
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

  constructor(private nav: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeamsPage Page');
  }

  itemTapped(){
    this.nav.push(TeamDetailPage);
  }
}
