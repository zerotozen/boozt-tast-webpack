import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import FavouritesPage from "./pages/favourites-page/favourites-page.component.jsx";
import CheckoutPage from "./pages/checkout-page/checkout-page.component.jsx";
import ProductPage from "./pages/product-page/product-page.component.jsx";
import { SigninPage } from "./pages/signin-page/signin-page.component.jsx";
import { Footer } from "./components/footer/footer.component.jsx";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/favourites" component={FavouritesPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/product/:collectionId" component={ProductPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
