import { cartReducer } from "./cartReducer";

describe("cartReducer", () => {
  test("ADD_TO_CART cartReducer", async () => {
    const id = "1";
    const action = { type: "ADD_TO_CART", payload: { id } };
    const state = {
      cart: [],
      qty: {},
      orders: {},
    };
    const NewState = cartReducer(state, action);
    expect(NewState.cart.length).toBe(1);
  });

  test("REMOVE_FROM_CART cartReducer", async () => {
    const id = "1";
    const action = { type: "REMOVE_FROM_CART", payload: { id } };
    const state = {
      cart: ["1"],
      qty: {},
      orders: {},
    };
    const NewState = cartReducer(state, action);
    expect(NewState.cart.length).toBe(0);
  });

  test("ADD_QTY cartReducer", async () => {
    const id = "test";
    const qty = 22;
    const action = { type: "ADD_QTY", payload: { id, qty } };
    const state = {
      cart: [],
      qty: {},
      orders: {},
    };
    const NewState = cartReducer(state, action);
    expect(NewState.qty).toEqual({ test: 22 });
  });

  test("UPDATE_QTY cartReducer", async () => {
    const id = "test";
    const qty = 33;
    const action = { type: "UPDATE_QTY", payload: { id, qty } };
    const state = {
      cart: [],
      qty: { test: 22 },
      orders: {},
    };
    const NewState = cartReducer(state, action);
    expect(NewState.qty).toEqual({ test: 33 });
  });
});
