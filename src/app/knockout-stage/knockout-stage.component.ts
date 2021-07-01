import { PredictionService } from './../services/prediction.service';
import { Component, OnInit } from '@angular/core';


declare var require: any;

@Component({
  selector: 'app-knockout-stage',
  templateUrl: './knockout-stage.component.html',
  styleUrls: ['./knockout-stage.component.scss']
})

export class KnockoutStageComponent implements OnInit {
  // groups: any;
  stageData: { user_id: string, teams: any[] };

  constructor(public poredictionService: PredictionService) {
    this.stageData = require('../../assets/files/teams.json');
  }

  ngOnInit(): void {
    console.log('in knockout stage');
    console.log(this.poredictionService.groupStageResult);
  }
}
