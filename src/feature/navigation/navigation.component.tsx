import React from "react";
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/home.component";


const Navigation = () => {
  return (
    <div>
      <h1>Basket</h1>
      <ul className="nav-header">
        <li>
          <NavLink exact to="/">
            Basket
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/infinite-scroll-pagination">With Api</NavLink>
        </li> */}
      </ul>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route
            path="/infinite-scroll-pagination"
            component={}
          /> */}
        </Switch>
      </div>
    </div>
  );
};

export default Navigation;
