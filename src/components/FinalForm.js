import React, { useContext, useState } from "react";
import OrderContext from "../store/OrderContext";
const FinalForm = () => {
  const orderDetails = useContext(OrderContext);
  console.log(orderDetails.shippingInfo);
  console.log(orderDetails.paymentInfo);
  return (
    <div>
      {orderDetails.shippingInfo.map((shippingInfo) => {
        return (
          <div className="shipping" key={shippingInfo.name}>
            <h2>Order Details</h2>
            <h3>Name : {shippingInfo.name}</h3>
            <h3>Address : {shippingInfo.address}</h3>
            <h3>City : {shippingInfo.city}</h3>
            <h3>State : {shippingInfo.state}</h3>
            <h3>Zipcode : {shippingInfo.zipcode}</h3>
          </div>
        );
      })}
      {orderDetails.paymentInfo.map((paymentInfo) => {
        return (
          <div className="payment" key={paymentInfo.name}>
            <h2>Payment Details</h2>
            <h3>CardHolder Name : {paymentInfo.name}</h3>
            <h3>Card Number : {paymentInfo.cardnumber}</h3>
            <h3>Expiry : {`${paymentInfo.month}/${paymentInfo.year}`}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FinalForm;
