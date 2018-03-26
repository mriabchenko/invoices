import { Injectable } from '@angular/core';

import * as appActions from '../actions/app.actions';

import { Actions, Effect } from '@ngrx/effects';
import { RestTransportService } from '../../services/transport/rest-transport.service';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';

export type Action = appActions.All;

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class AppEffects {

  @Effect()
  public getInvoices: Observable<Action> = this.actions.ofType(appActions.GET_INVOICES)
    .mergeMap(() => {
      return this.transport.getInvoices();
    })
    .map((invoices: InvoiceInterface[]) => new appActions.GetInvoicesSuccess(invoices));

  @Effect()
  public getCustomers: Observable<Action> = this.actions.ofType(appActions.GET_CUSTOMERS)
    .mergeMap(() => {
      return this.transport.getCustomers();
    })
    .map((customers: CustomerInterface[]) => new appActions.GetCustomersSuccess(customers));

  @Effect()
  public getProducts: Observable<Action> = this.actions.ofType(appActions.GET_PRODUCTS)
    .mergeMap(() => {
      return this.transport.getProducts();
    })
    .map((products: ProductInterface[]) => new appActions.GetProductsSuccess(products));

  public constructor(private actions: Actions, private transport: RestTransportService) {

  }
}
