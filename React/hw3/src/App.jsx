import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import s from "./App.module.scss";
import Error from "./pages/errorPage/Error";
import Router from "./routes/routes";

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [starsCount, setStars] = useState(
    localStorage.getItem("starsCount")
      ? parseInt(localStorage.getItem("starsCount"))
      : 0
  );
  const [cartCount, setCart] = useState(
    localStorage.getItem("cartCount")
      ? parseInt(localStorage.getItem("cartCount"))
      : 0
  );

  useEffect(() => {
    fetch("products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleStarsCount = (number) => {
    setStars(starsCount + number);
  };

  const handleAddToFavorites = (number) => {
    setCart(cartCount + number);
  };

  useEffect(() => {
    localStorage.setItem("starsCount", starsCount);
    localStorage.setItem("cartCount", cartCount);
  }, [starsCount, cartCount]);

  const buttonData = {
    backgroundColor: "lightgreen",
    text: "add to Cart",
  };

  return (
    <>
      <Header starsCount={starsCount} cartCount={cartCount} />
      <div className={s.wrapper}>
        <Router
          data={products}
          button={buttonData}
          handleStarsCount={handleStarsCount}
          handleAddToFavorites={handleAddToFavorites}
        />
      </div>
    </>
  );
};

export default App;
