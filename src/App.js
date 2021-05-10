import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path={`/categoryPage/:category`}
            component={CategoryPage}
          />
          <Route
            exact
            path={`/categoryPage/:category/:name/:id`}
            component={ProductDetails}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
