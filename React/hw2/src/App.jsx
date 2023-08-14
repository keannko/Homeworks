import s from "./App.module.scss";
import CardsList from "./components/CardsList/CardsList";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("products.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);


  return (
    <div>
      <Header />
      <div className={s.body}>
        <CardsList products={products} />
      </div>
    </div>
  );
};

export default App;
