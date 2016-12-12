import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { TournamentsPage, TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
    templateUrl: 'my-teams.html'
})
export class MyTeamsPage {
    favorites = [
        {
            team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
            tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
            tournamentName: 'March Madness Tournament'
        },
        {
            team: { id: 805, name: 'HC Elite', coach: 'Michelotti'},
            tournamentName : 'Holiday Hoops Challenge'
        }
    ]

    constructor(private nav: NavController, private loadingController: LoadingController, private eliteApi: EliteApi){}

    goToTournaments(){
        this.nav.push(TournamentsPage);
    }

    favoriteTapped($event, favorite){
        let loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(t => this.nav.push(TeamHomePage, favorite.team));
    }
}