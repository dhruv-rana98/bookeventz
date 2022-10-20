import React, { useContext } from "react";
import OrderContext from "../store/OrderContext";
const FinalForm = () => {
  const orderDetails = useContext(OrderContext);
  console.log(orderDetails.shippingInfo);
  console.log(orderDetails.paymentInfo);
  //   return (
  //     <div>
  //       {orderDetails.shippingInfo.map((shippingInfo) => (
  //         <div className="shipping">
  //           <h2>Order Details</h2>
  //           <h3>Name : {shippingInfo.name}</h3>
  //           <h3>Address : {shippingInfo.address}</h3>
  //           <h3>City : {shippingInfo.city}</h3>
  //           <h3>State : {shippingInfo.state}</h3>
  //           <h3>Zipcode : {shippingInfo.zipcode}</h3>
  //         </div>
  //       ))}
  //       <div className="shipping">
  //         <h2>Order Details</h2>
  //         <h3>Name : {orderDetails.shippingInfo.name}</h3>
  //         <h3>Address : {orderDetails.shippingInfo.address}</h3>
  //         <h3>City : {orderDetails.shippingInfo.city}</h3>
  //         <h3>State : {orderDetails.shippingInfo.state}</h3>
  //         <h3>Zipcode : {orderDetails.shippingInfo.zipcode}</h3>
  //       </div>
  //       <div className="payment">
  //         <h2>Payment Details</h2>
  //         <h3>CardHolder Name : {orderDetails.paymentInfo.name}</h3>
  //         <h3>Card Number : {orderDetails.paymentInfo.cardnumber}</h3>
  //         <h3>
  //           Expiry :{" "}
  //           {`${orderDetails.paymentInfo.month} ${orderDetails.paymentInfo.year}`}
  //         </h3>
  //       </div>

  //       {orderDetails.paymentInfo.map((payment) => (
  //           <div>{payment}</div>
  //         ))}
  //       {orderDetails.paymentInfo}
  //       {orderDetails.shippingInfo.map((shipping) => (
  //           <div>{shipping}</div>
  //         ))}
  //       {orderDetails.shippingInfo.toString()}
  //     </div>
  //   );
};

export default FinalForm;
