import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import ValidationForm from "../../components/ValidationForm/ValidationForm"

describe("ValidationForm component snapshot", () => {
  test("snapshot", () => {
    const renderValidationForm = render(
      <Provider store={store}>
        <BrowserRouter>
          <ValidationForm />
        </BrowserRouter>
      </Provider>
    );
    expect(renderValidationForm).toMatchSnapshot();
  });
});
