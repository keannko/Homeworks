import Modal from "../Modal/Modal";
import s from "./Button.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ContextStore } from "../../context";

const Button = (props) => {
  const { isList } = useContext(ContextStore);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    return function (dispatch) {
      dispatch({ type: "SET_STATUS", payload: { status: true } });
      dispatch({ type: "ADD_QTY", payload: { id: props.product.id, qty: 1 } });
      dispatch({ type: "SET_SELECT", payload: { selected: props.product.id } });
    };
  };

  const productInfo = (id) => {
    history.push(`/about/${id}`);
  };

  return (
    <>
      {isList ? (
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
      ) : (
        <div>
          <button
            className={s.btnList}
            onClick={() => {
              dispatch(handleClick());
            }}
          >
            add to Cart
          </button>

          <Modal />
        </div>
      )}
    </>
  );
};

export default Button;

// Button.propTypes = {
//   button: PropTypes.object,
//   handleAddToFavorites: PropTypes.func,
//   product: PropTypes.object,
// }
