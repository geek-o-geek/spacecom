import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchSpaceRoutingModule } from './launch-space-routing.module';
import { LaunchSpaceComponent } from './launch-space.component';
import { LaunchSpaceService } from './launch-space.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardModule } from 'src/app/modules/product-card/product-card.module';
import { NorecordModule } from 'src/app/modules/norecord/norecord.module';

@NgModule({
  declarations: [LaunchSpaceComponent],
  imports: [
    CommonModule,
    LaunchSpaceRoutingModule,
    HttpClientModule,
    ProductCardModule,
    NorecordModule
  ],
  providers: [LaunchSpaceService]
})
export class LaunchSpaceModule { }
