import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreateInvoiceFormModel } from './models/create-invoice-form.model';
import { CustomerInterface } from '../interfaces/customer.interface';
import { RestTransportService } from '../services/transport/rest-transport.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public createInvoiceFormContainer: CreateInvoiceFormModel;
  public customers: CustomerInterface[];

  public selectedCustomerAddress: string;

  private customerSelectSubscription: Subscription;

  public constructor(private fb: FormBuilder, private transport: RestTransportService) {
    this.createInvoiceFormContainer = new CreateInvoiceFormModel(this.fb);
    this.transport.getCustomers().then((customers: CustomerInterface[]) => {
      this.customers = customers;
      console.log(this.customers);
    });
    this.selectedCustomerAddress = 'Customer is not selected';
  }

  public ngOnInit() {
    this.customerSelectSubscription = this.createInvoiceFormContainer.customerId.valueChanges.subscribe((selectedCustomerId: number) => {
      this.selectedCustomerAddress = this.customers.find((customer: CustomerInterface) => customer.id === +selectedCustomerId).address;
    });
  }

  public ngOnDestroy() {
    this.customerSelectSubscription.unsubscribe();
  }
}
