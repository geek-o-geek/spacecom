import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadContentDirective } from 'src/app/directives/lazyload-content.directive';

@NgModule({
  declarations: [LazyloadContentDirective],
  imports: [
    CommonModule
  ],
  exports: [
    LazyloadContentDirective
  ]
})
export class LazyloadModule { }
