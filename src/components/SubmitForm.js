import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";
const SubmitForm = () => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName=" nav-link active"
            aria-current="page"
            to="/shipping-info"
          >
            Shipping Info
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName=" nav-link active"
            to="/payment-info"
          >
            Payment Info
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName=" nav-link active"
            to="/submit"
          >
            Submit
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/shipping-info" exact>
          <ShippingInfo />
        </Route>
        <Route path="/payment-info" exact>
          <PaymentInfo />
        </Route>
        <Route path="/submit" exact></Route>
      </Switch>
    </div>
  );
};

export default SubmitForm;
