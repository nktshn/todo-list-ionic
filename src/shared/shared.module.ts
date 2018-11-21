import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnixDatePipe } from './pipes/unix-date.pipe';

@NgModule({
  declarations: [UnixDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
      UnixDatePipe
  ]
})
export class SharedModule { }
