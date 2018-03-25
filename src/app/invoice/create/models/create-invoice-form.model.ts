import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductInterface } from '../../interfaces/product.interface';

export class CreateInvoiceFormModel {
  public createInvoiceFormGroup: FormGroup;

  public customerId: FormControl;
  public productsForm: FormArray;

  public constructor(private fb: FormBuilder) {
    this.createInvoiceFormGroup = this.fb.group({});
    // creating form controls
    this.customerId = this.fb.control('', [Validators.required]);
    this.productsForm = this.fb.array([]);

    // adding form controls to the form group
    this.createInvoiceFormGroup.addControl('customerId', this.customerId);
    this.createInvoiceFormGroup.addControl('productsForm', this.productsForm);
  }

  public addProductToInvoice(product: ProductInterface) {
    console.log('adding to the invoice', product);
    this.productsForm.push(this.initProductFormGroup(product));
    console.log(this.productsForm.value);
  }

  private initProductFormGroup(product: ProductInterface): FormGroup {
    return this.fb.group({
      id: product.id,
      quantity: 1,
      discount: this.fb.control(0,[Validators.min(0), Validators.max(100)]),
    });
  }
}
