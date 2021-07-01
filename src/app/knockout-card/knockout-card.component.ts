import { CountryService } from './../services/country.service';
//import { CountryService } from '../services/country.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-knockout-card',
  templateUrl: './knockout-card.component.html',
  styleUrls: ['./knockout-card.component.scss']
})
export class KnockoutCardComponent implements OnInit {
  country1: any;
  country2: any;
  @Input() countryName1: string;
  @Input() countryName2: string;
  winner: string;

  constructor(private countryService: CountryService) {
    this.countryService = countryService

  }

  ngOnInit(): void {
    this.country1 = this.countryService.get(this.countryName1.toLocaleLowerCase());
    this.country2 = this.countryService.get(this.countryName2.toLocaleLowerCase());
  }

  setWinner(winner: string) {
    this.winner = winner

  }

}
