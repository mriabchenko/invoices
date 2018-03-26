import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import * as InvoiceActions from '../actions/invoices.actions';

export type Action = InvoiceActions.All;
/**
 * Default invoices state
 * @type {{id: number; customer_id: number; discount: number; total: number}[]}
 */
const defaultState: InvoiceInterface[] = [];

export function invoicesReducer(state: InvoiceInterface[] = defaultState, action: Action): InvoiceInterface[] {
  // TODO: remove in prod
  console.log(action.type);
  switch (action.type) {
    case InvoiceActions.ADD_INVOICE:
      return [...state, action.payload ];
    case InvoiceActions.GET_INVOICES :
      return state;
    case InvoiceActions.GET_INVOICES_SUCCESS :
      return [...state, ...action.payload ];
    default:
      return state;
  }
}
