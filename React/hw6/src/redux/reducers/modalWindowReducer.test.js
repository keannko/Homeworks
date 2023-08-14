import { modalWindowReducer } from "./modalWindowReducer";

describe("modalWindowReducer", () => {
  test("SET_STATUS modalWindowReducer", async () => {
    const action = { type: "SET_STATUS", payload: { status: true } };
    const state = {
      isOpened: false,
      selected: "",
    };
    const NewState = modalWindowReducer(state, action);
    expect(NewState.isOpened).toBe(true);
  });

  test("SET_SELECT modalWindowReducer", async () => {
    const id = "1";
    const action = { type: "SET_SELECT", payload: { selected: id } };
    const state = {
      isOpened: false,
      selected: "",
    };
    const NewState = modalWindowReducer(state, action);
    expect(NewState.selected.length).toBe(1);
  });
});
