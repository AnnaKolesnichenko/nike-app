import "./InfoButtons.scss";

const InfoButtons = ({ text, color, backgroundColor }) => {
  return (
    <button style={{ color: color, backgroundColor: backgroundColor }}>
      {text}
    </button>
  );
};

export default InfoButtons;
