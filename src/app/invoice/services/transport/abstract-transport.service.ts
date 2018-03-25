import { CustomerInterface } from '../../interfaces/customer.interface';
import { ProductInterface } from '../../interfaces/product.interface';
import { InvoiceInterface } from '../../interfaces/invoice.interface';
import { InvoiceItemInterface } from '../../interfaces/invoice-item.interface';

/**
 * Describes the interface of communication with the server
 */
export abstract class AbstractTransportService {
  // TODO: describe create methods
  // public abstract createInvoice(): InvoiceInterface[];
  public abstract getCustomers(): Promise<CustomerInterface[]>;
  public abstract getInvoices(): Promise<InvoiceInterface[]>;
  public abstract getInvoiceItems(invoiceId: number): Promise<InvoiceItemInterface[]>;
  public abstract getProducts(): Promise<ProductInterface[]>;
}
