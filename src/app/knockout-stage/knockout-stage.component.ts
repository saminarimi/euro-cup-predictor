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
  stageData: {user_id: String, teams: teams[] };

  constructor() {
    this.stageData = require('../../assets/files/teams.json');
    // this.groups = [
    //   { c1: 'brazil', c2: 'denmark' },
    //   { c1: 'portugal', c2: 'germany' },
    //   { c1: 'italy', c2: 'austria' },
    //   { c1: 'switzerland', c2: 'spain' },
    //   { c1: 'sweden', c2: 'ukraine' },
    //   { c1: 'england', c2: 'croatia' },
    //   { c1: 'wales', c2: 'netherland' },
    //   { c1: 'belgium', c2: 'france' },
    // ]
  }

  ngOnInit(): void {
    
  }
}
