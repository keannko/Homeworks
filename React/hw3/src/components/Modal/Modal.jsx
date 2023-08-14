import PropTypes from "prop-types";
import s from "./Modal.module.scss";

const Modal = (props) => {
  const handleModalClick = (event) => {
    if (event.target.classList.contains(s.modalWrap)) {
      props.handleClick(false);
    }
  };

  const setToStorage = () => {
    localStorage.setItem(`cart, ${props.product.id}`, props.product.article);
  };

  return (
    <>
      {!!props.state && (
        <div className={s.modalWrap} onClick={handleModalClick}>
          <div className={s.modalWindow}>
            <div className={s.modalWindow__title}>
              <p>Подтвердите действие</p>
              <div
                className={s.close}
                onClick={() => props.handleClick(false)}
              ></div>
            </div>
            <div className={s.modalWindow__content}>
              <p>Вы действительно хотите добавить выбранный товар в корзину?</p>
            </div>
            <div className={s.modalWindow__buttons}>
              <button
                className={s.modalWindow__buttons_button}
                onClick={() => {
                  if(!!localStorage.getItem(`cart, ${props.product.id}`)){
                    props.handleClick(false);
                  }else{
                    props.handleAddToFavorites(1);
                    setToStorage();
                    props.handleClick(false);
                  }
                  
                }}
              >
                Добавить
              </button>
              <button
                className={s.modalWindow__buttons_button}
                onClick={() => props.handleClick(false)}
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

Modal.propTypes = {
  state: PropTypes.any,
  handleClick: PropTypes.func,
  handleAddToFavorites: PropTypes.func,
  product: PropTypes.object,
};
