import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./favorites.module.scss";

const Favorites = (props) => {
  const allProducts = useSelector((state) => state.products.products);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    return function (dispatch, getState) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { id } });
    };
  };

  const getFavoriteCards = (product) => {
    if (favorites.includes(product.id)) {
      return (
        <div key={product.id} className={s.favoriteCard}>
          <div
            className={s.close}
            onClick={() => dispatch(handleClick(product.id))}
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
    return null;
  };

  const history = useHistory();
  const backButton = () => {
    history.goBack();
  };

  return (
    <>
      <div className={s.wrapper}>
        <h1>Favorite products:</h1>
        <div className={s.backbutton}>
          <button onClick={backButton}>go back</button>
        </div>
        <div className={s.favoriteListWrapper}>
          <div className={s.itemsList}>{allProducts.map(getFavoriteCards)}</div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
