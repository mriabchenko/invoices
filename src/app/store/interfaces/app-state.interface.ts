import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';

export interface AppStateInterface {
  invoices: InvoiceInterface[];
  customers: CustomerInterface[];
  products: ProductInterface[];
  invoicesNumber: number; // yes, i can calculate invoices.length, but i just wanna make in a little bit more interesting to do the project.
  loading: boolean;
}
