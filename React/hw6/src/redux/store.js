import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { favoritesReducer } from "./reducers/favoritesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { modalWindowReducer } from "./reducers/modalWindowReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  products: productsReducer,
  modal: modalWindowReducer,
  cart: cartReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
