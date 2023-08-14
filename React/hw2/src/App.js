import { Component } from "react";
import CardList from "./components/CarList/Cardlist";
import Header from "./components/Header/Header";
import s from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      starsCount: localStorage.getItem("starsCount")
        ? parseInt(localStorage.getItem("starsCount"))
        : 0,
      cartCount: localStorage.getItem("cartCount")
        ? parseInt(localStorage.getItem("cartCount"))
        : 0,
    };
  }

  componentDidMount() {
    fetch("products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  handleOpenSecondModal = (state = true) => {
    this.setState({
      isOpenedSecondWindow: state,
    });
  };

  handleStarsCount = (number) => {
    this.setState((prevState) => ({
      starsCount: prevState.starsCount + number,
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("starsCount", this.state.starsCount);
    localStorage.setItem("cartCount", this.state.cartCount);
  }

  modalData = {
    header: "",
    closeButton: true,
  };

  buttonData = {
    backgroundColor: "lightgreen",
    text: "add to Cart",
  };

  handleAddToFavorites = (product) => {
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + 1,
    }));
    console.log("Добавлено в избранное:", product);
  };

  render() {
    return (
      <>
        <Header state={this.state} />
        <div className={s.wrapper}>
          <CardList
            data={this.state.products}
            button={this.buttonData}
            handleStarsCount={this.handleStarsCount}
            handleAddToFavorites={this.handleAddToFavorites}
          />
        </div>
      </>
    );
  }
}

export default App;
