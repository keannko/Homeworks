const GET_PRODUCTS = "GET_PRODUCTS";

const defaultState = {
  products: [],
};

export function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload.products };
    default:
      return state;
  }
}
