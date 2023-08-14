import { useDispatch, useSelector } from "react-redux";
import s from "./Modal.module.scss";

const Modal = (props) => {
  const dispatch = useDispatch();
  const modalWindowStatus = useSelector((state) => state.modal.isOpened);
  const selected = useSelector((state) => state.modal.selected);

  const closeWindow = () => {
    return function (dispatch) {
      dispatch({ type: "SET_STATUS", payload: { status: false } });
    };
  };

  const handleModalClick = (event) => {
    if (event.target.classList.contains(s.modalWrap)) {
      dispatch(closeWindow());
    }
  };

  const handleClick = () => {
    return function (dispatch) {
      dispatch({ type: "ADD_TO_CART", payload: { id: selected } });
      dispatch({ type: "SET_STATUS", payload: { status: false } });
    };
  };

  return (
    <>
      {!!modalWindowStatus && (
        <div className={s.modalWrap} data-testid="modal-wrap" onClick={handleModalClick}>
          <div className={s.modalWindow}>
            <div className={s.modalWindow__title}>
              <p>Подтвердите действие</p>
              <div
                className={s.close}
                onClick={() => dispatch(closeWindow())}
              ></div>
            </div>
            <div className={s.modalWindow__content}>
              <p>Вы действительно хотите добавить выбранный товар в корзину?</p>
            </div>
            <div className={s.modalWindow__buttons}>
              <button
                className={s.modalWindow__buttons_button}
                onClick={() => {
                  dispatch(handleClick());
                }}
              >
                Добавить
              </button>
              <button
                className={s.modalWindow__buttons_button}
                onClick={() => dispatch(closeWindow())}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;


