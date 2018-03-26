import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { ADD_INVOICE, InvoicesActions, REMOVE_INVOICE } from '../actions/invoices.actions';

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

/**
 * Helper function to create new state object
 * @param {InvoiceInterface[]} state
 * @param {InvoiceInterface} newData
 * @returns {InvoiceInterface[]}
 */
const newState = (state: InvoiceInterface[], newData: InvoiceInterface): InvoiceInterface[] => {
  state.push(newData);
  return state;
};

export function invoicesReducer(state: InvoiceInterface[] = defaultState, action: InvoicesActions): InvoiceInterface[] {
  console.log(action.type, state);
  switch (action.type) {
    case ADD_INVOICE:
      return newState(state, action.payload);
    case REMOVE_INVOICE :
      return state;
    default:
      return state;
  }
}
