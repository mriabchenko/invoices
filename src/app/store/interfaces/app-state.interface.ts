import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';

export interface AppStateInterface {
  invoices: InvoiceInterface[];
  customers: CustomerInterface[];
  products: ProductInterface[];
  invoicesNubmer: number;
}
