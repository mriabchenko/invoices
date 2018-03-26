import { Component } from '@angular/core';
import * as invoiceActions from './store/actions/app.actions';
import { RestTransportService } from './services/transport/rest-transport.service';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './store/interfaces/app-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public constructor(private transport: RestTransportService, private store: Store<AppStateInterface>) {
    this.getInvoices();
    this.getCustomers();
    this.getProducts();
  }

  public getInvoices(): void {
    this.store.dispatch(new invoiceActions.GetInvoices());
  }
  public getCustomers(): void {
    this.store.dispatch(new invoiceActions.GetCustomers());
  }
  public getProducts(): void {
    this.store.dispatch(new invoiceActions.GetProducts());
  }
}
