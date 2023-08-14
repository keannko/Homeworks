import { Component } from "react";
import Button from "../../Button/Button";
import { ReactComponent as IconStar } from "./star.svg";
import PropTypes from "prop-types";
import s from "./Card.module.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: localStorage.getItem(this.props.data.id)
        ? localStorage.getItem(this.props.data.id)
        : false,
    };
  }

  handleIconClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
    if (!this.state.isClicked) {
      this.props.handleStarsCount(1);
      localStorage.setItem(this.props.data.id, true);
    } else {
      this.props.handleStarsCount(-1);
      localStorage.removeItem(this.props.data.id);
    }
  };

  render() {
    return (
      <div key={this.props.data.id} className={s.cardWrapper}>
        <div className={s.cardContent}>
          <img src={this.props.data.image_url} alt="" />
          <div className={s.cardInfo}>
            <h3 className={s.cardInfo__name}>{this.props.data.name}</h3>
            <p>{this.props.data.price}</p>
            <div className={s.buttonsWrap}>
              <Button
                button={this.props.button}
                handleAddToFavorites={this.props.handleAddToFavorites}
                product={this.props.data}
              />
            </div>
            <div className={s.productColor}>
              <p>{this.props.data.article}</p>
              <p>{this.props.data.color}</p>
            </div>
          </div>
          <IconStar
            className={`${s.iconStar} ${
              this.state.isClicked ? s["iconStarClicked"] : ""
            }`}
            onClick={this.handleIconClick}
          />
        </div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  data: PropTypes.object,
  button: PropTypes.object,
  handleStarsCount: PropTypes.func,
  handleAddToFavorites: PropTypes.func,
};
