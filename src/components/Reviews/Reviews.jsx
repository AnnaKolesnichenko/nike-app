import React from "react";
import SingleReview from "./SingleReview";
import { TfiPlus } from "react-icons/tfi";
import "./Reviews.scss";
import "./SingleReview.scss";

const Reviews = () => {
  return (
    <div className="container">
      <div>
        <p>
          Відгуки про товар <span>(11)</span>{" "}
        </p>
        <span>01 / 03</span>
      </div>
      <div>
        <ul className="reviews">
          <li className="review-item review-item-plus">
            <TfiPlus className="plus" />
          </li>
          <SingleReview />
          <SingleReview />
          <SingleReview />
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
