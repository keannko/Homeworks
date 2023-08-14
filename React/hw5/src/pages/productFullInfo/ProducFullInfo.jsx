import { useHistory } from "react-router-dom";
import s from './ProductFullInfo.module.scss'

const ProductFullInfo = (props) => {
  const history = useHistory();
  const backButton = () => {
    history.goBack();
  };

  const handleData = (product) => {
    if (product.id === parseInt(props.id)) {
      return (
        <div>
          <div>
            <button className={s.btnBack} onClick={backButton}>go back</button>
          </div>
          <div className={s.about}>
            <h2>{product.name}</h2>
            {/* <div>{product.price}</div> */}
            <div className={s.about__text}>{product.about}</div>
            {/* <img src={product.image_url} alt="" /> */}
          </div>
        </div>
      );
    }
  };

  return <>{props.data.map(handleData)}</>;
};

export default ProductFullInfo;
