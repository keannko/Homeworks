import Button from "../../Button/Button";
import { ReactComponent as IconStar } from "./star.svg";
import PropTypes from "prop-types";
import s from "./Card.module.scss";
import { useState } from "react";

const Card = (props) => {
  const [isClicked, setClicked] = useState(
    localStorage.getItem(props.data.id)
      ? localStorage.getItem(props.data.id)
      : false
  );

  const handleIconClick = () => {
    setClicked((prevState) => !prevState);
    if (!isClicked) {
      props.handleStarsCount(1);
      localStorage.setItem(props.data.id, true);
    } else {
      props.handleStarsCount(-1);
      localStorage.removeItem(props.data.id);
    }
  };

  return (
    <div key={props.data.id} className={s.cardWrapper}>
      <div className={s.cardContent}>
        <img src={props.data.image_url} alt="" />
        <div className={s.cardInfo}>
          <h3 className={s.cardInfo__name}>{props.data.name}</h3>
          <p>{props.data.price}</p>
          <div className={s.buttonsWrap}>
            <Button
              button={props.button}
              handleAddToFavorites={props.handleAddToFavorites}
              product={props.data}
            />
          </div>
          <div className={s.productColor}>
            <p>{props.data.article}</p>
            <p>{props.data.color}</p>
          </div>
        </div>
        <IconStar
          className={`${s.iconStar} ${isClicked ? s["iconStarClicked"] : ""}`}
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
  handleStarsCount: PropTypes.func.isRequired,
  handleAddToFavorites: PropTypes.func.isRequired,
};
