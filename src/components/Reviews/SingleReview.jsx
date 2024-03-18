import React from "react";
import image from "../../images/review.jpg";
import { FaRegStar, FaStar } from "react-icons/fa6";
import "./SingleReview.scss";

const SingleReview = () => {
  return (
    <li className="review-item">
      <div className="review-auth">
        <img src={image} alt="review man" />
        <div>
          <ul className="stars">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaRegStar />
            </li>
          </ul>
          <h2>Жора Ремінгтон</h2>
        </div>
      </div>
      <p>
        Дуже задоволений якістю обслуговування і самою продукцією. Купували
        термобілизну у подарунок, друзі...
      </p>
    </li>
  );
};

export default SingleReview;
