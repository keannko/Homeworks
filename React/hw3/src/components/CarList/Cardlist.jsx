import Card from "./Card/Card";
import PropTypes from "prop-types";
import s from "./CardList.module.scss";

const CardList = (props) => {
  const handleData = (product) => {
    return (
      <div key={product.id}>
        <Card
          data={product}
          button={props.button}
          handleStarsCount={props.handleStarsCount}
          handleAddToFavorites={props.handleAddToFavorites}
        />
      </div>
    );
  };

  return (
    <>
      <div className={s.cardListWrapper}>{props.data.map(handleData)}</div>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  data: PropTypes.array,
  button: PropTypes.object,
  handleStarsCount: PropTypes.func,
  handleAddToFavorites: PropTypes.func,
};
