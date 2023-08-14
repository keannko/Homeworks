import { Component } from "react";
import Card from "./Card/Card";
import PropTypes from 'prop-types';
import s from "./CardList.module.scss";

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedCount: 0,
    };
  }

  handleData = (product) => {
    return (
      <div key={product.id}>
        <Card
          data={product}
          button={this.props.button}
          handleStarsCount={this.props.handleStarsCount}
          handleAddToFavorites={this.props.handleAddToFavorites}
        />
      </div>
    );
  };

  render() {
    return (
      <>
        <div className={s.cardListWrapper}>
          {this.props.data.map(this.handleData)}
        </div>
      </>
    );
  }
}

export default CardList;

CardList.propTypes = {
  data: PropTypes.array,
  button: PropTypes.object,
  handleStarsCount: PropTypes.func,
  handleAddToFavorites: PropTypes.func,
}

            
      
