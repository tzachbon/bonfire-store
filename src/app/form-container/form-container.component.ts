import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BonfireStoreService } from 'bonfire-store';
import { Store } from '../app.module';


class Form {
  group: FormGroup;
  formView = {
    agree: {
      placeholder: 'I agree to the term and conditions',
      type: 'checkbox',
      validators: [Validators.requiredTrue],
      index: 2
    },
    desc: {
      placeholder: 'description',
      type: 'textarea',
      validators: [Validators.required],
      index: 1
    },
    name: {
      placeholder: 'Name',
      type: 'input',
      validators: [Validators.required],
      index: 0
    },
  }
  constructor() {
    this.initForm();
  }

  initForm() {
    this.group = new FormGroup({})
    Object.entries(this.formView).forEach(([key, value]) => {
      this.group.addControl(key, new FormControl(null, value.validators));
    });

  }
}

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContainerComponent implements OnInit {
  form = new Form();

  constructor(
    private storeService: BonfireStoreService<Store>
  ) { }

  ngOnInit() {

  }

  onSubmit(event?: Event) {
    if (!this.form.group.valid) {
      return;
    }

    const { name, desc } = this.form.group.value;

    this.storeService.store.food.push({
      name,
      desc
    });


    this.form.group.reset();
  }



}


