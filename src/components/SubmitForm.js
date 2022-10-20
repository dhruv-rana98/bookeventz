import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";
import FinalForm from "./FinalForm";
const SubmitForm = () => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName=" nav-link active"
            aria-current="page"
            to="/submit-form/shipping-info"
          >
            Shipping Info
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName=" nav-link active"
            to="/submit-form/payment-info"
          >
            Payment Info
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName=" nav-link active"
            to="/submit-form/submit"
          >
            Submit
          </NavLink>
        </li>
      </ul>
      <Route path="/submit-form/shipping-info" exact>
        <ShippingInfo />
      </Route>
      <Route path="/submit-form/payment-info" exact>
        <PaymentInfo />
      </Route>
      <Route path="/submit-form/submit" exact>
        <FinalForm />
      </Route>
    </div>
  );
};

export default SubmitForm;
