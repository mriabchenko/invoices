import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateInvoiceFormModel } from './models/create-invoice-form.model';
import { CustomerInterface } from '../interfaces/customer.interface';
import { RestTransportService } from '../services/transport/rest-transport.service';
import { Subscription } from 'rxjs/Subscription';
import { ProductInterface } from '../interfaces/product.interface';
import { NewInvoiceItemInterface } from '../interfaces/new-invoice-item.interface';
import { InvoiceInterface } from '../interfaces/invoice.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public createInvoiceFormContainer: CreateInvoiceFormModel;
  public newProductPickerForm: FormGroup;

  public customers: CustomerInterface[];
  public products: ProductInterface[];

  public selectedCustomerAddress: string;
  public invoiceTotal: number;

  private customerSelectSubscription: Subscription;
  private newProductSelectSubscription: Subscription;
  private productsFormSubscription: Subscription;

  public constructor(private fb: FormBuilder, private transport: RestTransportService) {
    this.newProductPickerForm = this.fb.group({
      newProductId: '',
    });

    this.createInvoiceFormContainer = new CreateInvoiceFormModel(this.fb);
    this.transport.getCustomers().then((customers: CustomerInterface[]) => {
      this.customers = customers;
      console.log('customers', this.customers);
    });
    this.transport.getProducts().then((products: ProductInterface[]) => {
      this.products = products;
      console.log('products', this.products);
    });

    this.selectedCustomerAddress = 'Customer is not selected';
  }

  public ngOnInit(): void {
    this.customerSelectSubscription = this.createInvoiceFormContainer.customerId.valueChanges.subscribe((selectedCustomerId: number) => {
      this.selectedCustomerAddress = this.customers.find((customer: CustomerInterface) => customer.id === +selectedCustomerId).address;
    });

    this.newProductSelectSubscription = this.newProductPickerForm.get('newProductId').valueChanges.subscribe((newProductId: number) => {
      const selectedProduct = this.products.find((product: ProductInterface) => product.id === +newProductId);
      this.createInvoiceFormContainer.addProductToInvoice(selectedProduct);
    });

    this.productsFormSubscription = this.createInvoiceFormContainer.productsForm.valueChanges.subscribe((products: NewInvoiceItemInterface[]) => {
      if (this.createInvoiceFormContainer.productsForm.valid) {
        this.invoiceTotal = this.createInvoiceFormContainer.calcInvoiceTotal(products);
        const invoice: InvoiceInterface = {
          id: 1,
          customer_id: +this.createInvoiceFormContainer.customerId.value,
          discount: 0,
          total: this.invoiceTotal,
        };
        this.transport.createInvoice(invoice);
      }
    });
  }

  public ngOnDestroy(): void {
    this.customerSelectSubscription.unsubscribe();
    this.newProductSelectSubscription.unsubscribe();
    this.productsFormSubscription.unsubscribe();
  }
}
