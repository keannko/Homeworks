const ADD_QTY = "ADD_QTY";
const UPDATE_QTY = "UPDATE_QTY";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CREATE_ORDER = "CREATE_ORDER";

const defaultState = {
  cart: [],
  qty: {},
  orders: {}
};

export function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.includes(action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.id],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload.id),
      };
    case ADD_QTY:
      return {
        ...state,
        qty: {
          ...state.qty,
          [action.payload.id]: action.payload.qty,
        },
      };
    case UPDATE_QTY:
      const { id, qty } = action.payload;
      return {
        ...state,
        qty: {
          ...state.qty,
          [id]: qty,
        },
      };
    case CREATE_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          [id]: qty,
        },
      };
    default:
      return state;
  }
}
