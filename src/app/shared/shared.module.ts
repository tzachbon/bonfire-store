import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntriesPipe } from './entries.pipe';



@NgModule({
  declarations: [EntriesPipe],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    EntriesPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
