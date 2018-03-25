import { CustomerInterface } from '../../interfaces/customer.interface';
import { ProductInterface } from '../../interfaces/product.interface';
import { InvoiceInterface } from '../../interfaces/invoice.interface';
import { InvoiceItemInterface } from '../../interfaces/invoice-item.interface';
import { AbstractTransportService } from './abstract-transport.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';

export class RestTransportService implements AbstractTransportService {
  public constructor(private http: HttpClient) {
  }

  public getCustomers(): Promise<CustomerInterface[]> {
    const result = new Subject<CustomerInterface[]>();
    const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
    this.http.get(requestUrl).take(1).toPromise().then((data: CustomerInterface[]) => {
      result.next(data);
    });
    return result.asObservable().take(1).toPromise();
  }

  // public getInvoices(): Promise<InvoiceInterface[]> {
  //   const result = new Sub
  //   const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
  //   return this.http.get(requestUrl).take(1).toPromise();
  // }
  //
  // public getInvoiceItems(): Promise<InvoiceItemInterface[]> {
  //   const result = new Sub
  //   const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
  //   return this.http.get(requestUrl).take(1).toPromise();
  // }
  //
  // public getProducts(): Promise<ProductInterface[]> {
  //   const result = new Sub
  //   const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
  //   return this.http.get(requestUrl).take(1).toPromise();
  // }
}
