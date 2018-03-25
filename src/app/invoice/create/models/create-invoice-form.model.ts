import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductInterface } from '../../interfaces/product.interface';
import { Observable } from 'rxjs/Observable';
import { NewInvoiceItemInterface } from '../../interfaces/new-invoice-item.interface';

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

  public addProductToInvoice(product: ProductInterface): void {
    this.productsForm.push(this.initProductFormGroup(product));
  }

  /**
   * Dynamically calculating invoice total
   * @returns {Observable<number>}
   */
  public calcInvoiceTotal(invoiceItems: NewInvoiceItemInterface[]): number {
    return 0;
  }

  private initProductFormGroup(product: ProductInterface): FormGroup {
    return this.fb.group({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: this.fb.control(1, [Validators.min(1), Validators.pattern('^[0-9]+$')]),
      discount: this.fb.control(0, [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]+$')]),
    });
  }
}
