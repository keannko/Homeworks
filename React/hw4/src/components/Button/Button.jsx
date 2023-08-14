import Modal from "../Modal/Modal";
import s from "./Button.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Button = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    return function (dispatch) {
      dispatch({ type: "SET_STATUS", payload: { status: true } });
      dispatch({ type: "SET_SELECT", payload: { selected: props.product.id } });
    };
  };

  const productInfo = (id) => {
    history.push(`/about/${id}`);
  };

  return (
    <div className={s.buttonsWrapper}>
      <button
        className={s.button}
        onClick={() => {
          productInfo(props.product.id);
        }}
      >
        More info
      </button>
      <button
        className={s.button}
        onClick={() => {
          dispatch(handleClick());
        }}
      >
        add to Cart
      </button>
      <Modal />
    </div>
  );
};

export default Button;

// Button.propTypes = {
//   button: PropTypes.object,
//   handleAddToFavorites: PropTypes.func,
//   product: PropTypes.object,
// }
