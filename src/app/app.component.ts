import { Component } from '@angular/core';
import country from './interfaces/country.interface';
// import * as knockoutStageJson from ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'euro-cup-predictor';
  c1 = 'portugal';
  c2 = 'sweden';
}
