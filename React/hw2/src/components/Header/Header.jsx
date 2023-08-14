import { Component } from "react";
import { ReactComponent as Cart } from "./cart.svg";
import { ReactComponent as Star } from "./star.svg";
import PropTypes from 'prop-types';
import s from "./Header.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={s.header}>
        <div className={s.header__image}>
          <a href="#">
            <img src="https://doodleipsum.com/90x90/avatar-5?i=ff5f8efe74f9ca3f7b61106939063d3c"></img>
          </a>
        </div>
        <div className={s.header__buttons}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About us</a>
          <a href="#">Contacts</a>
          <div className={s.headerIcons}>
            <Star className={s.star} />
            <div className={s.starsCount}>{this.props.state.starsCount}</div>
            <Cart className={s.cart} />
            <div className={s.starsCount}>{this.props.state.cartCount}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;


Header.propTypes = {
  state: PropTypes.shape({
    starsCount: PropTypes.number,
    cartCount: PropTypes.number
  })
};