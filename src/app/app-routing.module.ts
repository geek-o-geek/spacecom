import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'space/launch', pathMatch: 'full' },
    {
      path: 'space',
      component: LayoutComponent,
      children: [
        { path: 'launch', loadChildren: './screens/launch-space/launch-space.module#LaunchSpaceModule' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
