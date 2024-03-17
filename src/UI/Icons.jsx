import { CiShoppingBasket } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import "./Icons.scss";

const Icons = () => {
  return (
    <ul className="icons">
      <li>
        <IoHeartOutline className="icon" />
      </li>
      <li>
        <CiShoppingBasket className="icon" />
      </li>
    </ul>
  );
};

export default Icons;
