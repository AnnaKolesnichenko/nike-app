import "./FavouritesItem.scss";
import { IoHeartOutline } from "react-icons/io5";

const FavouritesItem = ({ item }) => {
  return (
    <li key={item.id} className="fav-item">
      <div className="fav-heart">
        <IoHeartOutline />
      </div>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <h4>{item.category}</h4>
      <h4>{item.colors}</h4>
      <h5>{item.price} </h5>
    </li>
  );
};

export default FavouritesItem;
