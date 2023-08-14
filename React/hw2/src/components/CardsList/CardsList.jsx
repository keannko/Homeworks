import Card from "./Card/Card";
import s from "./CardsList.module.scss";

const CardsList = (props) => {

  return (
    <>
      <div className={s.CardsListWrap}>
          {props.products.map((product) => {
            return <Card key={product.id} product={product} />
          })}
      </div>
    </>
  );
};

export default CardsList;
