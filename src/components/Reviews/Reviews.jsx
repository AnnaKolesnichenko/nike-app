import React from "react";
import SingleReview from "./SingleReview";
import { TfiPlus } from "react-icons/tfi";
import arrowR from "../../images/Arrow_1.svg";
import arrowL from "../../images/Arrow_2.svg";
import "./Reviews.scss";
import "./SingleReview.scss";

const Reviews = () => {
  return (
    <div className="container">
      <div className="review-about">
        <p className="reviews-title">
          Відгуки про товар <span>(11)</span>{" "}
        </p>

        <div className="pagination">
          {" "}
          <span>01 / 03</span>
          <div>
            <img src={arrowL} alt="left" />
            <img src={arrowR} alt="right" />
          </div>
        </div>
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
