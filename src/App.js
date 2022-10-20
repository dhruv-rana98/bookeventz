import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StateCounter from "./components/StateCounter";
import FeedbackForm from "./components/FeedbackForm";
import SubmitForm from "./components/SubmitForm";
import OrderContext from "./store/OrderContext";
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
        <SubmitForm />
      </OrderContext.Provider>
    </div>
  );
}

export default App;
