import React from "react";

const OrderContext = React.createContext({
  shippingInfo: [],
  paymentInfo: [],
  setShippingInfo: (shipping) => {},
  setPaymentInfo: (payment) => {},
});

export default OrderContext;
