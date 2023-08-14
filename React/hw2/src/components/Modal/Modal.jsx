import { Component } from "react";
import PropTypes from 'prop-types';
import s from "./Modal.module.scss";

class Modal extends Component {
  handleModalClick = (event) => {
    if (event.target.classList.contains(s.modalWrap)) {
      this.props.handleClick(false);
    }
  };

  render() {
    return (
      <>
        {!!this.props.state && (
          <div className={s.modalWrap} onClick={this.handleModalClick}>
            <div className={s.modalWindow}>
              <div className={s.modalWindow__title}>
                <p>Подтвердите действие</p>
                <div
                  className={s.close}
                  onClick={() => this.props.handleClick(false)}
                ></div>
              </div>
              <div className={s.modalWindow__content}>
                <p>
                  Вы действительно хотите добавить выбранный товар в корзину?
                </p>
              </div>
              <div className={s.modalWindow__buttons}>
                <button
                  className={s.modalWindow__buttons_button}
                  onClick={() => {
                    this.props.handleAddToFavorites(this.props.product);
                    this.props.handleClick(false);
                  }}
                >
                  Добавить
                </button>
                <button
                  className={s.modalWindow__buttons_button}
                  onClick={() => this.props.handleClick(false)}
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;

Modal.propTypes = {
  state: PropTypes.any,
  handleClick: PropTypes.func,
  handleAddToFavorites: PropTypes.func,
  product: PropTypes.object,
}

