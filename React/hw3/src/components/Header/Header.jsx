import { ReactComponent as Cart } from "./cart.svg";
import { ReactComponent as Star } from "./star.svg";
import PropTypes from "prop-types";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__image}>
        <NavLink to="/">
          <img src="https://doodleipsum.com/90x90/avatar-5?i=ff5f8efe74f9ca3f7b61106939063d3c" alt="logo"></img>
        </NavLink>
      </div>
      <div className={s.header__buttons}>
        <NavLink to="/cardlist">Products</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <div className={s.headerIcons}>
          <NavLink to="/favorites">
            <Star className={s.star} />
          </NavLink>
          <div className={s.starsCount}>{props.starsCount}</div>
          <NavLink to="/cart">
            <Cart className={s.cart} />
          </NavLink>
          <div className={s.starsCount}>{props.cartCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  state: PropTypes.shape({
    starsCount: PropTypes.number,
    cartCount: PropTypes.number,
  }),
};
