import { useEffect } from "react";
import Header from "./components/Header/Header";
import s from "./App.module.scss";
import Router from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";

const App = (props) => {
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products.products);

  const getProductsThunk = () => {
    return function (dispatch) {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "GET_PRODUCTS", payload: { products: data } });
        });
    };
  };

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <Router data={allproducts} />
      </div>
    </>
  );
};

export default App;
