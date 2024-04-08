export function appReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_STOCK':
      return {
        ...state,
        stocks: state.stocks.map(stock =>
          stock.id === action.payload.id ? action.payload : stock
        ),
      };
    case 'UPDATE_PRODUCT_DETAIL':
      return {
        ...state,
        productDetails: state.productDetails.map(detail =>
          detail.id === action.payload.id ? action.payload : detail
        ),
      };
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] };
    case 'ADD_PURCHASE':
      return { ...state, purchases: [...state.purchases, action.payload] };
    case 'ADD_PURCHASE_ITEM':
      return { ...state, purchaseItems: [...state.purchaseItems, action.payload] };
    default:
      return state;
  }
}