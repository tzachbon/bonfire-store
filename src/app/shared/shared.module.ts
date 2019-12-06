import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntriesPipe } from './entries.pipe';
import { EditFoodComponent } from './components/edit-food/edit-food.component';
import { EditFoodDialogComponent } from './components/edit-food-dialog/edit-food-dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [EntriesPipe, EditFoodComponent, EditFoodDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    EntriesPipe,
    ReactiveFormsModule
  ],
  entryComponents: [EditFoodDialogComponent]
})
export class SharedModule { }
