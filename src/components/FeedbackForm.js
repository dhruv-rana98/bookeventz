import { useState, useRef } from "react";
import StarRating from "./StarRating";
const FeedbackForm = () => {
  const [ratings, setRatings] = useState(0);
  const [starReset, setStarReset] = useState(false);
  const reviewRef = useRef();
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const setRatingsHandler = (rating) => {
    setRatings(rating);
    console.log(rating);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const email = emailRef.current.value;
    console.log(ratings, review, name, number, email);

    reviewRef.current.value = "";
    nameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
    setStarReset(true);
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="form-group">
          <label htmlFor="star-rating">Rate Us</label>
          <StarRating getRatings={setRatingsHandler} reset={starReset} />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Enter a review</label>
          <textarea
            className="form-control"
            id="feedback"
            rows="3"
            ref={reviewRef}
          ></textarea>
        </div>
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
          <label htmlFor="number">Number</label>
          <input
            type="text"
            className="form-control"
            id="number"
            ref={numberRef}
            placeholder="Enter Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={emailRef}
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
