import { InvoiceInterface } from './invoice.interface';

export interface PostInvoiceResponseInterface extends InvoiceInterface {
  createdAt: string; // Date string
  updatedAt: string; // Date string
}
