import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamCardComponent } from './team-card/team-card.component';
import { standingPlMock } from '../mocks/standingsPL';
import {
  StandingData,
  RandomizerData,
  TeamDto,
  TeamByTable,
  TeamInfoByTable,
} from '../types/index';
import { StandingsService } from '../services/standing.service';
import { lastValueFrom } from 'rxjs';
import { TeamData, teamDataMock } from '../mocks/teamData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'randomizer-soccer';
  teams: TeamDto[] = [];
  firstTeam: TeamData = teamDataMock;
  secondTeam: TeamData = teamDataMock;

  constructor(private standingService: StandingsService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.loadData();
    } catch (e) {
      console.log(e);
    }
  }

  randomTeams() {
    const teamsQtd = this.teams.length;
    const firstTeamIndex = Math.floor(Math.random() * teamsQtd);

    let secondTeamIndex;

    do {
      secondTeamIndex = Math.floor(Math.random() * teamsQtd);
    } while (secondTeamIndex === firstTeamIndex);

    this.firstTeam = this.teams[firstTeamIndex];
    this.secondTeam = this.teams[secondTeamIndex];
  }

  private async fetchStandingByLeagueCode(leagueCode: string) {
    const observable = this.standingService.getStanding(leagueCode);
    return await lastValueFrom(observable);
  }

  async loadData() {
    const data = localStorage.getItem('randomizerData');

    if (!data) {
      const teams = await this.getTeamsByRequest();
      localStorage.setItem(
        'randomizerData',
        JSON.stringify({ requestDate: new Date(), teams })
      );

      this.teams = teams;
    }

    if (data) {
      const parsedData: RandomizerData = JSON.parse(data);
      const lastRequest = new Date(parsedData.requestDate);
      const currentDate = new Date();

      const timeDifference = currentDate.getTime() - lastRequest.getTime();

      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      if (timeDifference > oneDayInMilliseconds) {
        const teams = await this.getTeamsByRequest();
        localStorage.setItem(
          'randomizerData',
          JSON.stringify({ requestDate: new Date(), teams })
        );

        this.teams = teams;
      }
      this.teams = parsedData.teams;
    }
  }

  async getTeamsByRequest() {
    console.log('external request');
    const standingPDData: StandingData = await this.fetchStandingByLeagueCode(
      'PD'
    );
    const standingPLData: StandingData = await this.fetchStandingByLeagueCode(
      'PL'
    );
    const standingSAData: StandingData = await this.fetchStandingByLeagueCode(
      'SA'
    );
    const standingFL1Data: StandingData = await this.fetchStandingByLeagueCode(
      'FL1'
    );
    const standingPRTData: StandingData = await this.fetchStandingByLeagueCode(
      'PPL'
    );
    const standingBL1Data: StandingData = await this.fetchStandingByLeagueCode(
      'BL1'
    );

    const teamsPD = this.formatTeams(standingPDData, 10);
    const teamsPL = this.formatTeams(standingPLData, 10);
    const teamsSA = this.formatTeams(standingSAData, 5);
    const teamsFL1 = this.formatTeams(standingFL1Data, 5);
    const teamsPRT = this.formatTeams(standingPRTData, 4);
    const teamsBL1 = this.formatTeams(standingBL1Data, 6);

    return [
      ...teamsPD,
      ...teamsPL,
      ...teamsSA,
      ...teamsFL1,
      ...teamsPRT,
      ...teamsBL1,
    ];
  }

  formatTeams(standing: StandingData, limit: number): TeamDto[] {
    const teams = standing.standings[0].table.slice(0, limit);
    const league = standing.competition.name;
    const country = standing.area.name;

    return teams.map((x) =>
      this.teamDto({
        teamPayload: x.team,
        standingPayload: { position: x.position, league, country },
      })
    );
  }

  teamDto(payload: {
    teamPayload: TeamInfoByTable;
    standingPayload: { position: number; league: string; country: string };
  }): TeamDto {
    const { teamPayload, standingPayload } = payload;

    return {
      ...teamPayload,
      ...standingPayload,
    };
  }
}

// PD - Espanha
// PL - Inglaterra
// SA - Italia
// FL1 - França
// PPL - Portugal
// BL1 - Alemanha
