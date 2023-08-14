import Card from "./Card/Card";
import PropTypes from "prop-types";
import s from "./CardList.module.scss";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ContextStore } from "../../context";


const CardList = (props) => {
  const {changeVis, isList} = useContext(ContextStore)
  const allProducts = useSelector((state) => state.products.products);
  const handleData = (product) => {
    return (
      <div key={product.id}>
        <Card data={product} button={props.button} />
      </div>
    );
  };
  const handleDataList = (product) => {
    return (
      <div key={product.id}>
        <Card data={product} button={props.button} />
      </div>
    );
  };
const handleChange = () => {
  changeVis()
  console.log(isList)
}
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.changeWrap}>
          <label htmlFor="ChangeV">Change view: </label>
          <input type="checkbox" name="changeV" id="cnhangeV" onChange={handleChange}/>
        </div>
        {isList ? <div className={s.cardListWrapper}>{allProducts.map(handleData)}</div> 
                : <div className={s.listWrapper}>{allProducts.map(handleDataList)}</div> }
      </div>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  data: PropTypes.array,
  button: PropTypes.object,
};
