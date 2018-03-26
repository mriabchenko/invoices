import { Action } from '@ngrx/store';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';

export const ADD_INVOICE = '[Invoice] Add';
export const REMOVE_INVOICE = '[Invoice] Remove';

export class AddInvoice implements Action {
  public readonly type = ADD_INVOICE;

  public constructor(public payload: InvoiceInterface) {

  }
}

export class RemoveInvoice implements Action {
  public readonly type = REMOVE_INVOICE;

  public constructor(public payload: InvoiceInterface) {

  }
}

export type InvoicesActions = AddInvoice | RemoveInvoice;
