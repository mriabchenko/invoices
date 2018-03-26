import { Component } from '@angular/core';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StoreInterface } from '../../store/interfaces/store.interface';
import { CustomerInterface } from '../interfaces/customer.interface';

import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent {
  public invoices$: Observable<InvoiceInterface[]>;
  public customers$: Observable<CustomerInterface[]>;
  public invoicesNumber$: Observable<number>;

  public constructor(private store: Store<StoreInterface>) {
    this.invoices$ = this.store.select('state', 'invoices');
    this.customers$ = this.store.select('state', 'customers');
    this.invoicesNumber$ = this.store.select('state', 'invoicesNumber');
  }

  /**
   * Outputting customer name
   * Made just for fun
   * @param {number} id
   * @returns {Observable<string>}
   */
  public getCustomerNameById(id: number): Observable<string> {
    return this.customers$
      .map((customers: CustomerInterface[]) =>
        customers.find((customer: CustomerInterface) => customer.id === id).name);
  }
}
