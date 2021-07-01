import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: any;

  constructor() {
    this.countries = {
      italy: { name: 'Italy', url: 'https://www.uefa.com/imgml/flags/70x70/ITA.png', group: 'A' },
      denmark: { name: 'Denmark', url: 'https://www.uefa.com/imgml/flags/70x70/DEN.png', group: 'A' },
      portugal: { name: 'Portugal', url: 'https://www.uefa.com/imgml/flags/70x70/POR.png', group: 'B' },
      sweden: { name: 'Sweden', url: 'https://www.uefa.com/imgml/flags/70x70/SWE.png', group: 'B' },
      germany: { name: 'Germany', url: 'https://www.uefa.com/imgml/flags/70x70/GER.png', group: 'C' },
      england: { name: 'England', url: 'https://www.uefa.com/imgml/flags/70x70/ENG.png', group: 'D' },
      brazil: { name: 'Brazil', url: 'https://www.uefa.com/imgml/flags/70x70/BRA.png', group: 'C' },
      spain: { name: 'Spain', url: 'https://www.uefa.com/imgml/flags/70x70/ESP.png', group: 'E' },
      austria: { name: 'Austria', url: 'https://www.uefa.com/imgml/flags/70x70/AUT.png', group: 'F' },
      switzerland: { name: 'Switzerland', url: 'https://www.uefa.com/imgml/flags/70x70/SUI.png', group: 'C' },
      france: { name: 'France', url: 'https://www.uefa.com/imgml/flags/70x70/FRA.png', group: 'A' },
      ukraine: { name: 'Ukraine', url: 'https://www.uefa.com/imgml/flags/70x70/UKR.png', group: 'D' },
      netherland: { name: 'Netherland', url: 'https://www.uefa.com/imgml/flags/70x70/NED.png', group: 'E' },
      croatia: { name: 'Croatia', url: 'https://www.uefa.com/imgml/flags/70x70/CRO.png', group: 'F' },
      wales: { name: 'Wales', url: 'https://www.uefa.com/imgml/flags/70x70/WAL.png', group: 'C' },
      belgium: { name: 'Belgium', url: 'https://www.uefa.com/imgml/flags/70x70/BEL.png', group: 'B' },
      slovakia: { name: 'Slovakia', url: 'https://www.uefa.com/imgml/flags/70x70/SVK.png', group: 'B' },
      finland: { name: 'Finland', url: 'https://www.uefa.com/imgml/flags/70x70/FIN.png', group: 'B' },
      poland: { name: 'Poland', url: 'https://www.uefa.com/imgml/flags/70x70/POL.png', group: 'B' },
      scotland: { name: 'Scotland', url: 'https://www.uefa.com/imgml/flags/70x70/SCO.png', group: 'B' },
    }
  }

  get = (key: string): any => {
    const seletedCountry = this.countries[key];
    if (seletedCountry) return seletedCountry;
    else return { name: key, url: '', group: '' };
  }
}
