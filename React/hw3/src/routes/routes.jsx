import { Route, Switch } from "react-router-dom";
import CardList from "../components/CarList/Cardlist";
import Cart from "../pages/cart/Cart";
import Error from "../pages/errorPage/Error";
import Favorites from "../pages/favorites/favorites";
import MainPage from "../pages/mainPage/mainPage";
import ProductFullInfo from "../pages/productFullInfo/ProducFullInfo";

const Router = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/cardlist" exact>
        <CardList
          data={props.data}
          button={props.button}
          handleStarsCount={props.handleStarsCount}
          handleAddToFavorites={props.handleAddToFavorites}
        />
      </Route>
      <Route path="/cart" exact>
        <Cart
          data={props.data}
          handleAddToFavorites={props.handleAddToFavorites}
        />
      </Route>
      debugger
      <Route path="/favorites" exact>
        <Favorites
          data={props.data}
          handleStarsCount={props.handleStarsCount}
        />
      </Route>
      <Route
        path="/about/:id"
        exact
        render={({ match }) => (
          <ProductFullInfo id={match.params.id} data={props.data} />
        )}
      />
      <Route path="*" exact component={Error} />
    </Switch>
  );
};

export default Router;
