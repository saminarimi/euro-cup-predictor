import { PredictionService } from './../services/prediction.service';
import { Component, OnInit } from '@angular/core';

import { CountryService } from '../services/country.service';
@Component({
  selector: 'app-group-stage',
  templateUrl: './group-stage.component.html',
  styleUrls: ['./group-stage.component.scss']
})
export class GroupStageComponent implements OnInit {
  countries: any[] = [];
  selectedCountries: string[] = [];


  constructor(private countryService: CountryService, public predictionService: PredictionService) {
    this.countryService = countryService
    this.predictionService = predictionService
  }

  ngOnInit(): void {
    this.countries = [
      this.countryService.get('portugal'),
      this.countryService.get('brazil'),
      this.countryService.get('denmark'),
      this.countryService.get('spain'),
      this.countryService.get('england'),
      this.countryService.get('croatia'),

    ]
  }



  setSelected(countryName: string) {
    if (this.selectedCountries.includes(countryName)) {
      this.selectedCountries = this.selectedCountries.filter(function (c: string) {
        return countryName !== c;
      })
    }
    else if (this.selectedCountries.length === 4) {
      alert('You have already selected four countries.')
    } else {
      this.selectedCountries.push(countryName)
    }
    this.predictionService.groupStageResult = this.selectedCountries;
  }
}

