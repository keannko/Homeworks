import { Component, useState } from "react";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types';
import s from "./Button.module.scss";
import { useHistory } from "react-router-dom";

const Button = (props) => {
const history = useHistory()
const [isOpened, setOpened] = useState(false)

  

 const  handleClick = (state = true) => {
  setOpened(state)
  };

  const productInfo = (id) => {
    history.push(`/about/${id}`)
  }

    return (
      <div className={s.buttonsWrapper}>
        <button
          className={s.button}
          style={{ backgroundColor: props.button.backgroundColor }}
          onClick={() => {productInfo(props.product.id)}}
        >
          More info
        </button>
        <button
          className={s.button}
          style={{ backgroundColor: props.button.backgroundColor }}
          onClick={handleClick}
        >
          {props.button.text}
        </button>
        <Modal
          state={isOpened}
          handleClick={handleClick}
          handleAddToFavorites={props.handleAddToFavorites}
          product={props.product}
        />
      </div>
    );
  }


export default Button;

Button.propTypes = {
  button: PropTypes.object,
  handleAddToFavorites: PropTypes.func,
  product: PropTypes.object,
}
