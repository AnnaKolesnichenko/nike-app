import "./ItemDescription.scss";

import ItemInfo from "./ItemInfo";
import Button from "../../UI/Button";
import Icons from "../../UI/Icons";
import { Circle, Square } from "./Square";
import { IoIosArrowUp } from "react-icons/io";

const ItemDescription = () => {
  const squares = () => {
    let squareItems = [];
    for (let i = 0; i <= 7; i++) {
      const border = i === 6;
      squareItems.push(<Square key={i} border={border} />);
    }
    return squareItems;
  };

  return (
    <div>
      <div className="description">
        <h1 className="title">чоловічий термокостюм atlantic</h1>
        <h2>термокостюм</h2>
        <h3 className="price">3700 грн.</h3>
        <h2>оберіть розмір</h2>
        <ul>{squares()}</ul>
        <h2>оберіть колір</h2>
        <ul style={{ marginBottom: "0px" }}>
          <Circle color="white" border="1px solid black" />
          <Circle color="#959595" />
          <Circle color="#343434" />
        </ul>
        <IoIosArrowUp className="arrow-up" />
      </div>
      <ItemInfo />
      <div className="order-part">
        <div className="button-container">
          <Button
            text="оформити замовлення"
            color="white"
            backgroundColor="#000000"
          />
          <Button
            text="купити у кредит"
            color="#000000"
            backgroundColor="white"
          />
        </div>
        <div style={{ paddingTop: "17px" }}>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
