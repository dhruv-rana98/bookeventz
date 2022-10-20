import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StateCounter from "./components/StateCounter";
import FeedbackForm from "./components/FeedbackForm";
import SubmitForm from "./components/SubmitForm";
import OrderContext from "./store/OrderContext";
import { Switch, Route, NavLink } from "react-router-dom";
function App() {
  const [shippingInfo, setShippingInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);
  const shippingInfoHandler = (shipping) => {
    setShippingInfo((prevShipping) => {
      return [...prevShipping, shipping];
    });
  };
  const onPaymentInfoHandler = (payment) => {
    setPaymentInfo((prevPayment) => {
      return [...prevPayment, payment];
    });
  };
  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          shippingInfo: shippingInfo,
          paymentInfo: paymentInfo,
          setShippingInfo: shippingInfoHandler,
          setPaymentInfo: onPaymentInfoHandler,
        }}
      >
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName=" nav-link active"
                aria-current="page"
                to="/counter"
              >
                Task 1 Simple State Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName=" nav-link active"
                to="/feedbackform"
              >
                Task 2 Feedback Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName=" nav-link active"
                to="/submit-form"
              >
                Task 3 - 3 Tab Form
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/counter" exact>
              <StateCounter />
            </Route>
            <Route path="/feedbackform" exact>
              <FeedbackForm />
            </Route>
            <Route path="/submit-form">
              <SubmitForm />
            </Route>
          </Switch>
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <StateCounter />
      <FeedbackForm /> */}
      </OrderContext.Provider>
    </div>
  );
}

export default App;
