import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsFormModel } from './products-form.model';
export class CreateInvoiceFormModel {
  public createInvoiceFormGroup: FormGroup;

  public customer: FormControl;
  public products: ProductsFormModel;

  public constructor(private fb: FormBuilder) {
    this.createInvoiceFormGroup = this.fb.group({});
    // creating form controls
    this.customer = this.fb.control('', [Validators.required]);
    this.products = new ProductsFormModel(this.fb);

    // adding form controls to the form group
    this.createInvoiceFormGroup.addControl('customer', this.customer);
    this.createInvoiceFormGroup.addControl('products', this.products.productsFormArray);
  }
}
