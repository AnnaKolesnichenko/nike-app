import "./ItemImages.scss";

import main from "../../images/main.jpg";
import item1 from "../../images/list-1.jpg";
import item2 from "../../images/list-2.jpg";
import item3 from "../../images/list-3.jpg";

const ItemImages = () => {
  return (
    <div className="images">
      <img src={main} alt="man in white" className="main-image" />
      <ul className="image-list">
        <li>
          <img src={item1} alt="right side" />
        </li>
        <li>
          <img src={item2} alt="main small size" />
        </li>
        <li>
          <img src={item3} alt="right side" />
        </li>
      </ul>
    </div>
  );
};

export default ItemImages;
