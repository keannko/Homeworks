import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Modal from "../../components/Modal/Modal"
import { store } from "../../redux/store";

describe("Modal component snapshot", () => {
  test("snapshot", () => {
    const renderModal = render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal />
        </BrowserRouter>
      </Provider>
    );
    expect(renderModal).toMatchSnapshot();
  });
});
