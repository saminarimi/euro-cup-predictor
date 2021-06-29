import { Component, OnInit } from '@angular/core';
import teams from '../interfaces/team.interface';

declare var require: any;

@Component({
  selector: 'app-knockout-stage',
  templateUrl: './knockout-stage.component.html',
  styleUrls: ['./knockout-stage.component.scss']
})

export class KnockoutStageComponent implements OnInit {
  // groups: any;
  stageData: {user_id: string, teams: teams[] };

  constructor() {
    this.stageData = require('../../assets/files/teams.json');
  }

  ngOnInit(): void {
    
  }
}
