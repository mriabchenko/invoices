import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateInvoiceFormModel } from './models/create-invoice-form.model';
import { CustomerInterface } from '../interfaces/customer.interface';
import { RestTransportService } from '../../services/transport/rest-transport.service';
import { ProductInterface } from '../interfaces/product.interface';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import { InvoiceItemInterface } from '../interfaces/invoice-item.interface';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/find';
import { StoreInterface } from '../../store/interfaces/store.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnDestroy {
  public createInvoiceFormContainer: CreateInvoiceFormModel;
  public newProductPickerForm: FormGroup;

  public customers$: Observable<CustomerInterface[]>;
  public products$: Observable<ProductInterface[]>;

  public selectedCustomerAddress$: Observable<string>;
  public invoiceTotal$: Observable<number>;

  private customerSelectSubscription: Subscription;
  private newProductSelectSubscription: Subscription;
  private productsFormSubscription: Subscription;

  public constructor(private fb: FormBuilder, private transport: RestTransportService, private store: Store<StoreInterface>) {
    this.newProductPickerForm = this.fb.group({
      newProductId: '',
    });

    this.customers$ = this.store.select('state', 'customers');
    this.products$ = this.store.select('state', 'products');

    this.createInvoiceFormContainer = new CreateInvoiceFormModel(this.fb);
    // this.createInvoiceFormContainer
    //   .customerId
    //   .valueChanges
    //   .map((selectedCustomerId: number) => {
    //     console.log(selectedCustomerId);
    //     return
    //
    this.selectedCustomerAddress$ = this.customers$
      .map((customers: CustomerInterface[]) => customers.find((customer: CustomerInterface) => customer.id === 1).address);

    // this.newProductSelectSubscription = this.newProductPickerForm.get('newProductId').valueChanges.subscribe((newProductId: number) => {
    //   const selectedProduct = this.products.find((product: ProductInterface) => product.id === +newProductId);
    //   this.createInvoiceFormContainer.addProductToInvoice(selectedProduct);
    // });
    //
    // this.productsFormSubscription = this.createInvoiceFormContainer.productsForm.valueChanges.subscribe((products: InvoiceItemInterface[]) => {
    //   if (this.createInvoiceFormContainer.productsForm.valid) {
    //     this.invoiceTotal = this.createInvoiceFormContainer.calcInvoiceTotal(products);
    //     const invoice: InvoiceInterface = {
    //       id: 1,
    //       customer_id: +this.createInvoiceFormContainer.customerId.value,
    //       discount: 0,
    //       total: this.invoiceTotal,
    //     };
    //     this.transport.createInvoice(invoice);
    //   }
    // });
  }


  public ngOnDestroy(): void {
    // this.customerSelectSubscription.unsubscribe();
    // this.newProductSelectSubscription.unsubscribe();
    // this.productsFormSubscription.unsubscribe();
  }
}
