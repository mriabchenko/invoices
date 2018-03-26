import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import * as InvoiceActions from '../actions/invoices.actions';
import { AppStateInterface } from '../interfaces/app-state.interface';
import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';

export type Action = InvoiceActions.All;
/**
 * Default invoices state
 * @type {{id: number; customer_id: number; discount: number; total: number}[]}
 */
const defaultAppState: AppStateInterface = {
  invoices: <InvoiceInterface[]> [],
  customers: <CustomerInterface[]> [],
  products: <ProductInterface[]> [],
  invoicesNubmer: 0,
};

export function appStateReducer(state: InvoiceInterface[] = defaultAppState, action: Action): InvoiceInterface[] {
  // TODO: remove in prod
  console.log(action.type);
  switch (action.type) {
    case InvoiceActions.ADD_INVOICE:
      return [...state, action.payload ];
    case InvoiceActions.GET_INVOICES :
      return state;
    case InvoiceActions.GET_INVOICES_SUCCESS :
      return [...state, ...action.payload ];
    case InvoiceActions.GET_INVOICES_NUMBER :
      return [...state, ...action.payload ];
    default:
      return state;
  }
}
