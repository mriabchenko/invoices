import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';

export interface InvoicePostInterface {
  loading: boolean;
  invoices: InvoiceInterface[];
  error?: string;
}
