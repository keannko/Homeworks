import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./Cart.module.scss";
import ValidationForm from "../../components/ValidationForm/ValidationForm";
import Notification from "../../components/Notification/Notification";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const allProducts = useSelector((state) => state.products.products);
  const orderQty = useSelector((state) => state.cart.qty);

  const removeFromCart = (id) => {
    return function (dispatch) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };
  };

  const getItemInCart = (product) => {
    if (cartItems.includes(product.id)) {
      return (
        <div key={product.id} className={s.favoriteCard}>
          <div
            className={s.close}
            onClick={() => dispatch(removeFromCart(product.id))}
          ></div>
          <img src={product.image_url} alt="" />
          <div className={s.favoriteCard__infoBlock}>
            <h2>{product.name}</h2>
            <div className={s.favoriteCard__about}>{product.about}</div>
            <div className={s.favoriteCard__price}>
              <h3>{product.price} UAH</h3>
            </div>
          </div>
        </div>
      );
    }
    return;
  };

  const handleChange = (id, qty) => {
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  };

  const handleSumPrice = (id, price) => {
    const qty = orderQty[id] || 1;
    const result = qty * price;
    return result;
  };

  const getFavorites = (product) => {
    if (cartItems.includes(product.id)) {
      return (
        <div key={product.id} className={s.orderInfo}>
          <div>{product.name}</div>
          <div>{product.price} UAH</div>
          <input
            type="number"
            onChange={(event) => handleChange(product.id, event.target.value)}
            defaultValue="1"
          />
          <div>{handleSumPrice(product.id, product.price)} UAH</div>
          <div
            className={s.tableClose}
            onClick={() => dispatch(removeFromCart(product.id))}
          ></div>
        </div>
      );
    }
    return;
  };

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.backbutton}>
          <button className={s.backBtn} onClick={goBack}>go back</button>
        </div>
        {!!cartItems.length > 0 ? (
          <>
            <h1 className={s.orderTitle}>
              Для оформления заказа заполните форму
            </h1>
            <div className={s.orderForm}>
              <ValidationForm />
              <div className={s.orderForm__table}>
                <div>{allProducts.map(getFavorites)}</div>
                <div className={s.resultBlock}>
                  <div className={s.resultBlock__finTitle}>Finally:</div>
                  <div className={s.resultBlock__finPcs}>1</div>
                  <div className={s.resultBlock__finSum}>2</div>
                </div>
              </div>
            </div>
          </>
        ): <Notification />}
        <div className={s.favoriteListWrapper}>
          <div className={s.itemsList}>{allProducts.map(getItemInCart)}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
