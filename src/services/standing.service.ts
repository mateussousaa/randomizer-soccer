import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StandingData } from '../types';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private url = environment.FOOTBALL_DATA_ORG_URL
  constructor(private httpClient: HttpClient) {

  }

  getStanding(leagueCode: string): Observable<StandingData> {
    const endpoint = `/api/competitions/${leagueCode}/standings`

    return this.httpClient.get<StandingData>(endpoint, {
      headers: {
        'X-Auth-Token': environment.FOOTBALL_DATA_ORG_TOKEN,
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
}
