import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import * as InvoiceActions from '../actions/invoices.actions';

export type Action = InvoiceActions.All;
/**
 * Default invoices state
 * @type {{id: number; customer_id: number; discount: number; total: number}[]}
 */
const defaultState: InvoiceInterface[] = [{
  id: 1000,
  customer_id: 1,
  discount: 0,
  total: 10,
}];

export function invoicesReducer(state: InvoiceInterface[] = defaultState, action: Action): any {
  console.log(action.type, state);
  switch (action.type) {
    case InvoiceActions.ADD_INVOICE:
      return [...state, action.payload];
    case InvoiceActions.GET_INVOICES :
      return { loading: true, invoices: state };
    case InvoiceActions.GET_INVOICES_SUCCESS :
      return { loading: false, invoices: [ ...state, action.payload ] };
    default:
      return state;
  }
}
