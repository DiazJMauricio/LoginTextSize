import React, { useState, useRef } from "react";
import InputText from "./InputText";
import TextLabel from "./TextLabel";

const Controller = props => {
  const boxWidth = props.boxWidth !== undefined ? props.boxWidth : 820;
  const maxSize = props.maxSize !== undefined ? props.maxSize : 200;
  const fontFamily =
    props.fontFamily !== undefined ? props.fontFamily : "Courier";
  const [text, setText] = useState("");
  const [size, setSize] = useState(maxSize);
  const containerRef = useRef(null);

  const onChange = nText => {
    //  Set Variables
    let context = containerRef.current.getContext("2d");
    let nSize = size; //  TextFontSize

    //  Calcular ancho actual
    context.font = nSize + "px " + fontFamily;
    let textSize = context.measureText(nText).width;

    //  Comparar ancho. y cambiar TextFontSize
    if (textSize > boxWidth && nSize > 20) {
      nSize /= 1.5;
    } else {
      context.font = nSize * 1.5 + "px " + fontFamily;
      textSize = context.measureText(nText).width;
      if (!(textSize > boxWidth) && nSize < maxSize) {
        nSize *= 1.5;
      }
    }
    setText(nText);
    setSize(nSize);
  };

  return (
    <div className="controller">
      <canvas ref={containerRef} />
      <TextLabel
        text={text}
        size={size}
        boxWidth={boxWidth}
        fontFamily={fontFamily}
      />
      <div className="InputText">
        <InputText onChange={onChange} />
      </div>
    </div>
  );
};

export default Controller;
