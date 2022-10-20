import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./PaymentInfo.css";
import OrderContext from "../store/OrderContext";
const PaymentInfo = () => {
  const nameInputRef = useRef();
  const cardnumberInputRef = useRef();
  const monthInputRef = useRef();
  const yearInputRef = useRef();
  const cvvInputRef = useRef();
  const history = useHistory();
  const orderDetails = useContext(OrderContext);
  const [paymentInfo, setPaymentInfo] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const cardnumber = cardnumberInputRef.current.value;
    const month = monthInputRef.current.value;
    const year = yearInputRef.current.value;
    const cvv = cvvInputRef.current.value;

    const tempPaymentInfo = { name, cardnumber, month, year, cvv };
    orderDetails.setPaymentInfo(tempPaymentInfo);
    setPaymentInfo((prevInfo) => {
      return { ...prevInfo, ...tempPaymentInfo };
    });

    nameInputRef.current.value = "";
    cardnumberInputRef.current.value = "";
    monthInputRef.current.value = "";
    yearInputRef.current.value = "";
    cvvInputRef.current.value = "";
    history.push("/submit-form/submit");
  };

  useEffect(() => {
    console.log(paymentInfo);
  }, [paymentInfo]);
  return (
    <div className="padding">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <strong>Credit Card</strong>
                <small>enter your card details</small>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        ref={nameInputRef}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="ccnumber">Credit Card Number</label>

                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          ref={cardnumberInputRef}
                          required
                          placeholder="0000 0000 0000 0000"
                          maxLength="12"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="mdi mdi-credit-card"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="ccmonth">Month</label>
                    <select
                      className="form-control"
                      id="ccmonth"
                      ref={monthInputRef}
                      required
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="ccyear">Year</label>
                    <select
                      className="form-control"
                      id="ccyear"
                      ref={yearInputRef}
                      required
                    >
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV/CVC</label>
                      <input
                        className="form-control"
                        id="cvv"
                        ref={cvvInputRef}
                        type="text"
                        maxLength="3"
                        required
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-sm btn-success float-right"
                  type="submit"
                >
                  <i className="mdi mdi-gamepad-circle"></i> Save
                </button>
                <button className="btn btn-sm btn-danger" type="reset">
                  <i className="mdi mdi-lock-reset"></i> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
