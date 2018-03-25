import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class CreateInvoiceFormModel {
  public createInvoiceFormGroup: FormGroup;

  public customerId: FormControl;
  public products: FormArray;

  public constructor(private fb: FormBuilder) {
    this.createInvoiceFormGroup = this.fb.group({});
    // creating form controls
    this.customerId = this.fb.control('', [Validators.required]);
    this.products = this.fb.array([]);

    // adding form controls to the form group
    this.createInvoiceFormGroup.addControl('customerId', this.customerId);
    this.createInvoiceFormGroup.addControl('products', this.products);
  }
}
