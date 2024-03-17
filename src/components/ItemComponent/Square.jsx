import { FaStar } from "react-icons/fa6";

export const Square = ({ border }) => (
  <li
    style={{
      width: border ? "28px" : "30px",
      height: border ? "28px" : "30px",
      borderRadius: "5px",
      backgroundColor: "#D9D9D9",
      border: border ? "1px solid black" : "none",
    }}
  ></li>
);

export const Circle = ({ color, border }) => {
  return (
    <li
      style={{
        width: border ? "28px" : "30px",
        height: border ? "28px" : "30px",
        backgroundColor: color,
        borderRadius: "100%",
        border: border ? "1px solid black" : "none",
      }}
    ></li>
  );
};

export const Star = ({ filled }) => {
  return (
    <FaStar
      style={{
        width: "8px",
        height: "8px",
        fill: filled ? "white" : "black",
      }}
    />
  );
};
