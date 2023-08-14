import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import s from "./Cart.module.scss";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const getAllStorageItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items.push(key);
    }
    return items;
  };

  const removeItemFromCart = (productId) => {
    localStorage.removeItem(`cart, ${productId}`);
    setCartItems(cartItems.filter((item) => item.id !== productId));
    props.handleAddToFavorites(-1);
  };

  const getItemInCart = (product) => {
    const items = getAllStorageItems();
    const itemInCartList = items.map((item) => {
      if (parseInt(item.split(",")[1]) === product.id) {
        return (
          <div key={product.id} className={s.favoriteCard}>
            <div
              className={s.close}
              onClick={() => removeItemFromCart(product.id)}
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
    });
    return itemInCartList;
  };

  useEffect(() => {
    const cartItems = props.data.filter((product) => {
      const itemKey = `cart, ${product.id}`;
      return localStorage.hasOwnProperty(itemKey);
    });
    setCartItems(cartItems);
  }, [props.data]);

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
          <div className={s.itemsList}>{cartItems.map(getItemInCart)}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
