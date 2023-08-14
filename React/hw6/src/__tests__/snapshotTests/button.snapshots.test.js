import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Button from "../../components/Button/Button";
import { store } from "../../redux/store";

describe("Button component snapshot", () => {
  test("snapshot", () => {
    const renderButton = render(
      <Provider store={store}>
        <BrowserRouter>
          <Button />
        </BrowserRouter>
      </Provider>
    );
    expect(renderButton).toMatchSnapshot();
  });
});
