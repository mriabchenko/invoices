import { Action } from '@ngrx/store';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';

export const GET_INVOICES = '[Invoices] Getting...';
export const GET_INVOICES_SUCCESS = '[Invoices] Get success';

export const POST_INVOICE = '[Invoice] Posting...';
export const POST_INVOICE_SUCCESS = '[Invoice] Post success';

export const GET_CUSTOMERS = '[Customers] Getting...';
export const GET_CUSTOMERS_SUCCESS = '[Customers] Get success';

export const GET_PRODUCTS = '[Products] Getting...';
export const GET_PRODUCTS_SUCCESS = '[Products] Get success';

// tslint:disable:max-classes-per-file
export class PostInvoice implements Action {
  public readonly type = POST_INVOICE;
  public constructor(public payload: InvoiceInterface[]) {

  }
}

export class PostInvoiceSuccess implements Action {
  public readonly type = POST_INVOICE_SUCCESS;
  public constructor(public payload: InvoiceInterface[]) {

  }
}

export class GetInvoices implements Action {
  public readonly type = GET_INVOICES;
}

export class GetInvoicesSuccess implements Action {
  public readonly type = GET_INVOICES_SUCCESS;

  public constructor(public payload: InvoiceInterface[]) {

  }
}

export class GetCustomers implements Action {
  public readonly type = GET_CUSTOMERS;
}

export class GetCustomersSuccess implements Action {
  public readonly type = GET_CUSTOMERS_SUCCESS;

  public constructor(public payload: CustomerInterface[]) {

  }
}

export class GetProducts implements Action {
  public readonly type = GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  public readonly type = GET_PRODUCTS_SUCCESS;

  public constructor(public payload: ProductInterface[]) {

  }
}
// tslint:enable:max-classes-per-file

export type All =
  GetInvoices |
  GetInvoicesSuccess |
  GetCustomers |
  GetCustomersSuccess |
  GetProducts |
  GetProductsSuccess |
  PostInvoice |
  PostInvoiceSuccess;
