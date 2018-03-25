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
    const result = new Subject<CustomerInterface[]>();
    const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
    this.http.get(requestUrl).take(1).toPromise().then((data: CustomerInterface[]) => {
      result.next(data);
    });
    return result.take(1).toPromise();
    // I am not using this to prevent ts interfaces - related compiler errors
    // return this.http.get(environment.restApiBaseUrl + '/api/customers').take(1).toPromise()
  }

  public getInvoices(): Promise<InvoiceInterface[]> {
    const result = new Subject<InvoiceInterface[]>();
    const requestUrl: string = environment.restApiBaseUrl + '/api/invoices';
    this.http.get(requestUrl).take(1).toPromise().then((data: InvoiceInterface[]) => {
      result.next(data);
    });
    return result.take(1).toPromise();
  }

  public getInvoiceItems(invoiceId: number): Promise<InvoiceItemInterface[]> {
    const result = new Subject<InvoiceItemInterface[]>();
    const requestUrl: string = environment.restApiBaseUrl + `/api/invoices/${invoiceId}/items`;
    this.http.get(requestUrl).take(1).toPromise().then((data: InvoiceItemInterface[]) => {
      result.next(data);
    });
    return result.take(1).toPromise();
  }

  public getProducts(): Promise<ProductInterface[]> {
    const result = new Subject<ProductInterface[]>();
    const requestUrl: string = environment.restApiBaseUrl + '/api/products';
    this.http.get(requestUrl).take(1).toPromise().then((data: ProductInterface[]) => {
      result.next(data);
    });
    return result.take(1).toPromise();
  }
}
