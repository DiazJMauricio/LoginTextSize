import React from "react";

const TextLabel = props => {
  const style = {
    fontSize: props.size + "px",
    width: props.boxWidth + "px",
    fontFamily: props.fontFamily
  };
  return (
    <p className="TextLabel" style={style}>
      {props.text}
    </p>
  );
};

export default TextLabel;
