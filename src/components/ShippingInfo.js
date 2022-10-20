import React, { useRef, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import OrderContext from "../store/OrderContext";
const ShippingInfo = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipcodeRef = useRef();
  const [shippingInfo, setShippingInfo] = useState({});
  const history = useHistory();
  const orderDetails = useContext(OrderContext);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const zipcode = zipcodeRef.current.value;
    const tempShippingInfo = { name, address, city, state, zipcode };
    orderDetails.setShippingInfo(tempShippingInfo);
    setShippingInfo((prevInfo) => {
      return { ...prevInfo, ...tempShippingInfo };
    });
    history.push("/payment-info");
    nameRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    stateRef.current.value = "";
    zipcodeRef.current.value = "";
  };

  useEffect(() => {
    console.log(shippingInfo);
  }, [shippingInfo]);

  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            ref={nameRef}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            ref={addressRef}
            placeholder="Enter your street Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            ref={cityRef}
            placeholder="Enter your city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">state</label>
          <input
            type="text"
            className="form-control"
            id="state"
            ref={stateRef}
            placeholder="Enter your state"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            ref={zipcodeRef}
            placeholder="Enter your postal code"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ShippingInfo;
