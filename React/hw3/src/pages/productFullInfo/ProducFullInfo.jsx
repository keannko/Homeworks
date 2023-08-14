import { useHistory } from "react-router-dom";

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
            <button onClick={backButton}>go back</button>
          </div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.about}</div>
          <img src={product.image_url} alt="" />
        </div>
      );
    }
  };

  return <>{props.data.map(handleData)}</>;
};

export default ProductFullInfo;
