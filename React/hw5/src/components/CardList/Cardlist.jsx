import Card from "./Card/Card";
import PropTypes from "prop-types";
import s from "./CardList.module.scss";
import { useSelector } from "react-redux";

const CardList = (props) => {
  const allProducts = useSelector((state) => state.products.products);
  const handleData = (product) => {
    return (
      <div key={product.id}>
        <Card data={product} button={props.button} />
      </div>
    );
  };

  return (
    <>
      <div className={s.cardListWrapper}>{allProducts.map(handleData)}</div>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  data: PropTypes.array,
  button: PropTypes.object,
};
