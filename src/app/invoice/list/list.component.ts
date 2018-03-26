import { Component } from '@angular/core';
import { RestTransportService } from '../services/transport/rest-transport.service';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStateInterface } from '../../store/interfaces/app-state.interface';
import * as invoiceActions from '../../store/actions/invoices.actions';

export type Action = invoiceActions.All;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent {

  public invoices: InvoiceInterface[];
  public invoices$: Observable<InvoiceInterface[]>;

  public constructor(private transport: RestTransportService, private store: Store<AppStateInterface>) {
    this.invoices = [];
    this.invoices$ = this.store.select('invoices');
    this.getInvoices();
  }

  public getInvoices(): void {
    this.store.dispatch(new invoiceActions.GetInvoices());
  }

  public addOne(): void {
    // this.store.dispatch(new AddInvoice({
    //   id: 1,
    //   customer_id: 23,
    //   discount: 3,
    //   total: 234,
    // }));

  }

}
