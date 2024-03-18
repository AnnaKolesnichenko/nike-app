import React from "react";
import { Liked } from "../../data/favourites";
import "./Favourites.scss";
import FavouritesItem from "./FavouritesItem";
import arrow from "../../images/chevrons-down.svg";

const Favourites = () => {
  return (
    <div className="favs-container">
      <h1>Ще може сподобатись</h1>
      <ul className="favs-list">
        {Liked.map((item) => (
          <FavouritesItem item={item} />
        ))}
      </ul>
      <div className="arrow-down">
        <p>дивитись більше</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Favourites;
