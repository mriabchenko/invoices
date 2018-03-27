import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateInvoiceFormModel } from './models/create-invoice-form.model';
import { CustomerInterface } from '../interfaces/customer.interface';
import { RestTransportService } from '../../services/transport/rest-transport.service';
import { ProductInterface } from '../interfaces/product.interface';
import { StoreInterface } from '../../store/interfaces/store.interface';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/switch';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import * as invoiceActions from '../../store/actions/app.actions';
import { PostInvoiceResponseInterface } from '../interfaces/post-invoice-response.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public createInvoiceFormContainer: CreateInvoiceFormModel;
  public newProductPickerForm: FormGroup;

  public customers$: Observable<CustomerInterface[]>;
  public products$: Observable<ProductInterface[]>;
  public invoicesNumber$: Observable<number>;

  public selectedCustomerAddress$: Observable<string>;
  public invoiceTotal: number;

  private invoices$: Observable<InvoiceInterface[]>;
  private currentInvoiceId: number;
  private invoiceHasBeenCreated: boolean;

  private newProductSelectSubscription: Subscription;
  private createInfoFormSubscription: Subscription;
  private invoicesNumberSubscription: Subscription;

  public constructor(private fb: FormBuilder, private transport: RestTransportService, private store: Store<StoreInterface>) {
    this.invoiceHasBeenCreated = false;
    this.newProductPickerForm = this.fb.group({
      newProductId: '',
    });

    this.customers$ = this.store.select('state', 'customers');
    this.products$ = this.store.select('state', 'products');
    this.invoices$ = this.store.select('state', 'invoices');
    this.invoicesNumber$ = this.store.select('state', 'invoicesNumber');

    this.createInvoiceFormContainer = new CreateInvoiceFormModel(this.fb);

    // Calculating the address of current customer
    this.selectedCustomerAddress$ = this.createInvoiceFormContainer
      .customerId
      .valueChanges
      .map((selectedCustomerId: string) =>
        this.customers$.map(
          (customers: CustomerInterface[]) => customers.find((customer: CustomerInterface) => customer.id === +selectedCustomerId).address,
        ))
      .switch();

    // Adding new products to the invoice
    this.newProductSelectSubscription = this.newProductPickerForm
      .get('newProductId')
      .valueChanges
      .map((newProductId: number) =>
        this.products$.map((products: ProductInterface[]) =>
          products.find((product: ProductInterface) => product.id === +newProductId),
        ))
      .switch()
      .subscribe((selectedProduct: ProductInterface) => {
        this.createInvoiceFormContainer.addProductToInvoice(selectedProduct);
        this.invoiceTotal = this.createInvoiceFormContainer.calcInvoiceTotal();
      });


    this.createInfoFormSubscription = this.createInvoiceFormContainer
      .createInvoiceFormGroup
      .valueChanges
      .map(() => {
        if (this.createInvoiceFormContainer.createInvoiceFormGroup.invalid) {
          return;
        }
        if (this.createInvoiceFormContainer.productsForm.length === 0) {
          return;
        }
        this.invoiceTotal = this.createInvoiceFormContainer.calcInvoiceTotal();
        const newInvoice: InvoiceInterface = {
          id: this.currentInvoiceId,
          customer_id: +this.createInvoiceFormContainer.customerId.value,
          discount: +this.createInvoiceFormContainer.discount.value,
          total: this.invoiceTotal,
        };

        // creating new invoice on the server or updating an existing one
        if (this.invoiceHasBeenCreated) {
          this.store.dispatch(new invoiceActions.UpdateInvoice(newInvoice));
        } else {
          this.store.dispatch(new invoiceActions.PostInvoice(newInvoice));
          this.invoiceHasBeenCreated = true;
        }
      })
      .subscribe();
  }

  public ngOnInit(): void {
    this.invoicesNumberSubscription = this.invoicesNumber$.take(1).subscribe((invoicesNumber: number) => {
      this.currentInvoiceId = invoicesNumber + 1;
    });
  }

  public ngOnDestroy(): void {
    this.newProductSelectSubscription.unsubscribe();
    this.createInfoFormSubscription.unsubscribe();
    this.invoicesNumberSubscription.unsubscribe();
  }
}
