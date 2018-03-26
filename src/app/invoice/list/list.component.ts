import { Component } from '@angular/core';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StoreInterface } from '../../store/interfaces/store.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent {
  public invoices$: Observable<InvoiceInterface[]>;
  public invoicesNumber$: Observable<number>;

  public constructor(private store: Store<StoreInterface>) {
    this.invoices$ = this.store.select('state', 'invoices');
    this.invoicesNumber$ = this.store.select('state', 'invoicesNumber');
  }
}
