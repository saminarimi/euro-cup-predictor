import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private webservice: WebService) {
  }

  getTeams() {
    return this.webservice.get('team');
  }

  getUserTeams() {
    return this.webservice.get('userTeam');
  }

  createUserTeam(team: any) {
    return this.webservice.post('userTeam', { team });
  }

  getKnockoutUserTeam() {
    return this.webservice.get('kockoutUserTeam');
  }

  createKnockoutUserTeam(team: any) {
    return this.webservice.post('knockoutUserTeam', { team });
  }
}
