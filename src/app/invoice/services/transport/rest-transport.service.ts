import { CustomerInterface } from '../../interfaces/customer.interface';
import { ProductInterface } from '../../interfaces/product.interface';
import { InvoiceInterface } from '../../interfaces/invoice.interface';
import { InvoiceItemInterface } from '../../interfaces/invoice-item.interface';
import { AbstractTransportService } from './abstract-transport.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RestTransportService implements AbstractTransportService {
  public constructor(private http: HttpClient) {
  }

  public getCustomers(): Promise<CustomerInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
    return this.http.get(requestUrl).take(1).toPromise();
  }

  public getInvoices(): Promise<InvoiceInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/invoices';
    return this.http.get(requestUrl).take(1).toPromise();
  }

  public getInvoiceItems(invoiceId: number): Promise<InvoiceItemInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + `/api/invoices/${invoiceId}/items`;
    return this.http.get(requestUrl).take(1).toPromise();
  }

  public getProducts(): Promise<ProductInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/products';
    return this.http.get(requestUrl).take(1).toPromise();
  }
}
