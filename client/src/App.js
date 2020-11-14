import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazon
            </a>
          </div>
          <div>
            <a href="/">Cart</a>
            <a href="/">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
