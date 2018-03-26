import { Injectable } from '@angular/core';

import * as invoiceActions from '../actions/invoices.actions';

import { Actions, Effect } from '@ngrx/effects';
import { RestTransportService } from '../../invoice/services/transport/rest-transport.service';
import { Observable } from 'rxjs/Observable';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { Subject } from 'rxjs/Subject';

export type Action = invoiceActions.All;

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class InvoicesEffects {

  @Effect()
  public getInvoices: Observable<Action> = this.actions.ofType(invoiceActions.GET_INVOICES)
    .mergeMap(() => {
      const result = new Subject<InvoiceInterface[]>();
      this.transport.getInvoices().then((invoices: InvoiceInterface[]) => {
        result.next(invoices);
      });
      return result;
    })
    .map((invoices: InvoiceInterface[]) => new invoiceActions.GetInvoicesSuccess(invoices));

  public constructor(private actions: Actions, private transport: RestTransportService) {

  }
}
