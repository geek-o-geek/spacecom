import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorecordComponent } from 'src/app/components/norecord/norecord.component';

@NgModule({
  declarations: [NorecordComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NorecordComponent
  ]
})
export class NorecordModule { }
