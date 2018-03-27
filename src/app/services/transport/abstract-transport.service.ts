import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { InvoiceItemInterface } from '../../invoice/interfaces/invoice-item.interface';
import { Observable } from 'rxjs/Observable';

/**
 * Describes the interface of communication with the server
 */
export abstract class AbstractTransportService {
  public abstract createInvoice(invoice: InvoiceInterface): Observable<any>;
  public abstract updateInvoice(invoice: InvoiceInterface): Observable<any>;
  public abstract getCustomers(): Observable<CustomerInterface[]>;
  public abstract getInvoices(): Observable<InvoiceInterface[]>;
  public abstract getProducts(): Observable<ProductInterface[]>;
  public abstract getInvoiceItems(invoiceId: number): Observable<InvoiceItemInterface[]>;
}
