import { render, screen } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Prov from "../../context";
import configureStore from "redux-mock-store";
import Modal from "./Modal";

const mockStore = configureStore([]);

describe("Modal window", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      modal: {
        isOpened: true,
        selected: "123",
      },
    });
  });

  test("renders modal window when isOpened is true", () => {
    render(
      <Provider store={store}>
        <Prov>
          <BrowserRouter>
            <Modal />
          </BrowserRouter>
        </Prov>
      </Provider>
    );
    expect(screen.getByTestId("modal-wrap")).toBeInTheDocument();
  });
});
