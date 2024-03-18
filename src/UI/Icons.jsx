// import { CiShoppingBasket } from "react-icons/ci";
// import { IoHeartOutline } from "react-icons/io5";
import "./Icons.scss";
import heart from "../../src/images/heart.svg";
import bag from "../../src/images/bag.svg";

const Icons = () => {
  return (
    <ul className="icons">
      <li>
        {/* <IoHeartOutline className="icon" /> */}
        <img src={heart} alt="heart" />
      </li>
      <li>
        {/* <CiShoppingBasket className="icon" /> */}
        <img src={bag} alt="bag" />
      </li>
    </ul>
  );
};

export default Icons;
