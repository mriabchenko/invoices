import { Action } from '@ngrx/store';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';

export const ADD_INVOICE = '[Invoice] Add';
export const GET_INVOICES = '[Invoice] Get';
export const GET_INVOICES_SUCCESS = '[Invoice] Get success';

export class AddInvoice implements Action {
  public readonly type = ADD_INVOICE;
  public constructor(public payload: InvoiceInterface) {}
}

export class GetInvoices implements Action {
  public readonly type = GET_INVOICES;
}

export class GetInvoicesSuccess implements Action {
  public readonly type = GET_INVOICES_SUCCESS;
  public constructor(public payload: InvoiceInterface[]) {}
}

export type All = AddInvoice | GetInvoices | GetInvoicesSuccess;
