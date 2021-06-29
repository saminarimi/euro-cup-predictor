import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupStageComponent } from './group-stage/group-stage.component';
import { KnockoutStageComponent } from './knockout-stage/knockout-stage.component';


const routes: Routes = [
  { path: "group-stage", component: GroupStageComponent },
  { path: "", component: KnockoutStageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
