import { FormArray, FormBuilder } from '@angular/forms';

export class ProductsFormModel {
  public productsFormArray: FormArray;
  public constructor(private fb: FormBuilder) {
    this.productsFormArray = this.fb.array([]);
  }
}
