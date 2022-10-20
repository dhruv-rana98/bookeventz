import React, { useEffect, useState } from "react";
import "./StarRating.css";
const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // const [reset, setReset] = useState(true);
  useEffect(() => {
    if (props.reset === true) {
      setRating(0);
      setHover(0);
    }
  }, [props.reset]);
  const onClickHandler = (index) => {
    setRating(index);
    props.getRatings(index);
  };
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => onClickHandler(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
