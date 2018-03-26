import { Injectable } from '@angular/core';

import * as invoiceActions from '../actions/invoices.actions';

import { Actions, Effect } from '@ngrx/effects';
import { RestTransportService } from '../../invoice/services/transport/rest-transport.service';
import { Observable } from 'rxjs/Observable';
import { InvoicePostInterface } from '../interfaces/invoice-post.interface';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { Subject } from 'rxjs/Subject';

export type Action = invoiceActions.All;

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';


@Injectable()
export class InvoicesEffects {

  @Effect()
  public getInvoices: Observable<Action> = this.actions.ofType(invoiceActions.GET_INVOICES)
    .delay(2000)
    .mergeMap(() => {
      const result = new Subject<InvoicePostInterface>();
      this.transport.getInvoices().then((invoices: InvoiceInterface[]) => {
        result.next({
          invoices,
          loading: false,
        });
      });
      return result;
    })
    .map((invoicePost: InvoicePostInterface) => new invoiceActions.GetInvoicesSuccess(invoicePost));

  public constructor(private actions: Actions, private transport: RestTransportService) {

  }
}
