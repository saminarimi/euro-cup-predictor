import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnockoutCardComponent } from './knockout-card/knockout-card.component';
import { KnockoutStageComponent } from './knockout-stage/knockout-stage.component';
import { GroupStageComponent } from './group-stage/group-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    KnockoutCardComponent,
    KnockoutStageComponent,
    GroupStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
