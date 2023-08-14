import { Component } from "react";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types';
import s from "./Button.module.scss";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  handleClick = (state = true) => {
    this.setState({
      isOpened: state,
    });
  };

  render() {
    return (
      <div className={s.buttonsWrapper}>
        <button
          className={s.button}
          style={{ backgroundColor: this.props.button.backgroundColor }}
          onClick={this.handleClick}
        >
          {this.props.button.text}
        </button>
        <Modal
          state={this.state.isOpened}
          handleClick={this.handleClick}
          handleAddToFavorites={this.props.handleAddToFavorites}
          product={this.props.product}
        />
      </div>
    );
  }
}

export default Button;

Button.propTypes = {
  button: PropTypes.object,
  handleAddToFavorites: PropTypes.func,
  product: PropTypes.object,
}
