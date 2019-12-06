import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BonfireStoreService } from 'bonfire-store';
import { Store } from '../../../app.module';
import { Food } from '../../../table/table-datasource';

@Component({
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.scss']
})
export class EditFoodDialogComponent implements OnInit {
  state = this.storeService.createLocalStore({
    form: null,
    shouldDelete: false
  });

  constructor(
    public dialogRef: MatDialogRef<EditFoodDialogComponent>,
    private storeService: BonfireStoreService<Store, {
      form: FormGroup,
      shouldDelete: boolean
    }>,
    @Inject(MAT_DIALOG_DATA) public data: { food: Food, index: number }
  ) { }

  ngOnInit() {
    this.state.set$('form', new FormGroup({
      name: new FormControl(this.data.food.name || '', [Validators.required]),
      desc: new FormControl(this.data.food.desc || '', [Validators.required])
    }));
  }

  submit() {
    // const { form, shouldDelete } = this.state.store;
    // this.dialogRef.close({
    //   value: form.value,
    //   shouldDelete
    // });
    const { form } = this.state.store;
    this.storeService.store.food[this.data.index] = form.value;
    this.dialogRef.close();
  }

  delete() {
    // this.dialogRef.close({ shouldDelete: true });
    const { food } = this.storeService.store;
    food.splice(this.data.index, 1);
  this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
