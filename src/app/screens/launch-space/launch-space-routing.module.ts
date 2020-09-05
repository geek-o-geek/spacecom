import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSpaceComponent } from './launch-space.component';

const routes: Routes = [
  { path: '', component: LaunchSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchSpaceRoutingModule { }
