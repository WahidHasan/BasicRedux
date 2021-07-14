import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import { BasketState } from "../../core/redux/store";
import Home from "../home/home.component";
import TestComponent from "../test/test.component";

const Navigation = () => {
  const totalProducts = useSelector(
    (state: BasketState) => state.basket.cartItems
  );
  let location = useLocation();
  return (
    <div>
      <h1>Woo Cart</h1>
      <ul className="nav-header">
        <li>
          <NavLink exact to="/">
            Basket
          </NavLink>
        </li>
        <li>
          <NavLink to="/test">Todo</NavLink>
        </li>
        {location.pathname === "/" ? (
          <>
            {" "}
            <i className="fa main-basket">&#xf07a;</i>
            <span className="badge badge-warning main-basket" id="lblCartCount">
              {" "}
              {totalProducts}{" "}
            </span>{" "}
          </>
        ) : (
          <></>
        )}
      </ul>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/test"
            component={TestComponent}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Navigation;
