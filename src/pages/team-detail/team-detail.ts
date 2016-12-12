import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import * as _ from 'lodash';
import * as moment from 'moment';

import { EliteApi } from '../../shared/shared';
import { GamePage } from '../../pages/pages';
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
  allGames: any[];
  games: any[];
  team: any = {};
  teamStanding: any = {};
  isFollowing: boolean = false;
  private tourneyData: any;
  dateFilter: string;
  useDateFilter = false;

  constructor(private nav: NavController, private navParams: NavParams, private eliteApi : EliteApi, private alertController: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
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
    this.allGames = this.games;
    this.teamStanding = _.find(this.tourneyData.standings, { 'teamId': this.team.id});
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

  getScoreDisplayBadgeClass(game){
    return game.scoreDisplay.indexOf('W:') === 0 ? 'primary' : 'danger';
  }

  gameClicked($event, game){
    let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
    this.nav.parent.parent.push(GamePage, sourceGame);
  }

  dateChanged(){
    if(this.useDateFilter){
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    } else {
      this.games = this.allGames;
    }
  }

  getScoreWL(game){
    return game.scoreDisplay ? game.scoreDisplay[0] : '';
  }

  toggleFollow(){
    if(this.isFollowing){
      let confirm = this.alertController.create({
        title: 'Unfollow',
        message: 'Are you sure you want to unfollow?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.isFollowing = false;
              //TODO: persist data
            }
          },
          {
            text: 'No'
          }
        ]
      });
      confirm.present();
    } else {
      this.isFollowing = true;
      // TODO: persist data
    }
  }
}
