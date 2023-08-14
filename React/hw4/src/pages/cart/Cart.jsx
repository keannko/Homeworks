import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./Cart.module.scss";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const allProducts = useSelector((state) => state.products.products);

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
          <div className={s.favoriteCard__info}>
            <h2>{product.name}</h2>
            <h3>{product.price} UAH</h3>
          </div>
          <div className={s.favoriteCard__about}>{product.about}</div>
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
        <h1>Cart:</h1>
        <div className={s.backbutton}>
          <button onClick={goBack}>go back</button>
        </div>
        <div className={s.favoriteListWrapper}>
          <div className={s.itemsList}>{allProducts.map(getItemInCart)}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
