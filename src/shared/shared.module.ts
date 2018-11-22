import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnixDatePipe } from './pipes/unix-date.pipe';
import { PrioritySelectComponent } from './components/priority-select/priority-select.component';

@NgModule({
  declarations: [UnixDatePipe, PrioritySelectComponent],
  imports: [
    CommonModule
  ],
  exports: [
      UnixDatePipe,
      PrioritySelectComponent
  ]
})
export class SharedModule { }
