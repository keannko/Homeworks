import Button from "../../Button/Button";
import { ReactComponent as IconStar } from "./star.svg";
import PropTypes from "prop-types";
import s from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isClicked = favorites.includes(props.data.id) ? true : false;

  const handleIconClick = (item) => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: {
        item,
      },
    });
  };

  return (
    <>
      <div key={props.data.id} className={s.cardWrapper}>
        <div className={s.cardContent}>
          <img src={props.data.image_url} alt="" />
          <div className={s.cardInfo}>
            <h3 className={s.cardInfo__name}>{props.data.name}</h3>
            <p>{props.data.price}</p>
            <div className={s.buttonsWrap}>
              <Button button={props.button} product={props.data} />
            </div>
            <div className={s.productColor}>
              <p>{props.data.article}</p>
              <p>{props.data.color}</p>
            </div>
          </div>
          <IconStar
            className={`${s.iconStar} ${isClicked ? s["iconStarClicked"] : ""}`}
            onClick={() => handleIconClick(props.data)}
          />
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
