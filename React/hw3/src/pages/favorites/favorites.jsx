import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import s from "./favorites.module.scss";

const Favorites = (props) => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = parseInt(localStorage.key(i));
      if (!!key) {
        items.push(key);
      }
    }
    setFavoriteCards(items);
  }, []);

  const handleClick = (id) => {
    setFavoriteCards((prevFavoriteCards) =>
      prevFavoriteCards.filter((item) => item !== id)
    );
    localStorage.removeItem(id);
    props.handleStarsCount(-1);
  };

  const getFavoriteCards = (product) => {
    if (favoriteCards.includes(product.id)) {
      return (
        <div key={product.id} className={s.favoriteCard}>
          <div
            className={s.close}
            onClick={() => handleClick(product.id)}
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
          <div className={s.itemsList}>{props.data.map(getFavoriteCards)}</div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
