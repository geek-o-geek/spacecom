import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchSpaceRoutingModule } from './launch-space-routing.module';
import { LaunchSpaceComponent } from './launch-space.component';
import { LaunchSpaceService } from './launch-space.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardModule } from 'src/app/modules/product-card/product-card.module';
import { NorecordModule } from 'src/app/modules/norecord/norecord.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { LazyloadModule } from 'src/app/modules/lazyload/lazyload.module';

@NgModule({
  declarations: [LaunchSpaceComponent],
  imports: [
    CommonModule,
    LaunchSpaceRoutingModule,
    HttpClientModule,
    ProductCardModule,
    NorecordModule,
    SharedModule,
    LazyloadModule
  ],
  providers: [LaunchSpaceService]
})
export class LaunchSpaceModule { }
