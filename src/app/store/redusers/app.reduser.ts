import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import * as appActions from '../actions/app.actions';
import { AppStateInterface } from '../interfaces/app-state.interface';
import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';

export type Action = appActions.All;
/**
 * Default invoices state
 */
const defaultAppState: AppStateInterface = {
  invoices: <InvoiceInterface[]> [],
  customers: <CustomerInterface[]> [],
  products: <ProductInterface[]> [],
  invoicesNumber: 0,
  loading: false,
};


export function appReducer(state: AppStateInterface = defaultAppState, action: Action): AppStateInterface {
  // TODO: remove in prod
  console.log(action.type);
  switch (action.type) {

    case appActions.GET_INVOICES :
      state.loading = true;
      return state;

    case appActions.GET_INVOICES_SUCCESS :
      state.loading = false;
      state.invoices = action.payload;
      state.invoicesNumber = action.payload.length;
      return state;

    case appActions.GET_CUSTOMERS :
      state.loading = true;
      return state;

    case appActions.GET_CUSTOMERS_SUCCESS :
      state.loading = false;
      state.customers = action.payload;
      return state;

    case appActions.GET_PRODUCTS :
      state.loading = true;
      return state;

    case appActions.GET_PRODUCTS_SUCCESS :
      state.loading = false;
      state.products = action.payload;
      return state;

    default:
      return state;
  }
}
