import { Injectable } from '@angular/core';

import * as invoiceActions from '../actions/app.actions';

import { Actions, Effect } from '@ngrx/effects';
import { RestTransportService } from '../../services/transport/rest-transport.service';
import { Observable } from 'rxjs/Observable';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';

export type Action = invoiceActions.All;

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class AppEffects {

  @Effect()
  public getInvoices: Observable<Action> = this.actions.ofType(invoiceActions.GET_INVOICES)
    .mergeMap(() => {
      return this.transport.getInvoices();
    })
    .map((invoices: InvoiceInterface[]) => new invoiceActions.GetInvoicesSuccess(invoices));

  public constructor(private actions: Actions, private transport: RestTransportService) {

  }
}
