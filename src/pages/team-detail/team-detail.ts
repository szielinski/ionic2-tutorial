import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

import { EliteApi } from '../../shared/shared';
/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  games: any[];
  team: any;
  private tourneyData: any;

  constructor(private nav: NavController, private navParams: NavParams, private eliteApi : EliteApi) {}

  ionViewDidLoad() {
    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();

    this.games = _.chain(this.tourneyData.games)
                .filter(game => game.team1Id === this.team.id || game.team2Id === this.team.id)
                .map(game => {
                  let isTeam1 = (game.team1Id === this.team.id);
                  let opponentName = isTeam1 ? game.team2 : game.team1;
                  let scoreDisplay = this.getScoreDisplay(isTeam1, game.team1Score, game.team2Score);
                  return {
                    gameId : game.id,
                    opponent : opponentName,
                    time : Date.parse(game.time),
                    location : game.location,
                    locationUrl : game.locaionUrl,
                    scoreDisplay : scoreDisplay,
                    homeAway : (isTeam1 ? "vs." : "at")
                  };
                })
                .value();
  }

  getScoreDisplay(isTeam1, team1Score, team2Score){
    if(team1Score && team2Score){
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    } else {
      return "";
    }
  }

}
