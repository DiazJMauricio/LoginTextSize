import React, { useState } from "react";

const InputText = props => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={onChange}
      placeholder="Write here..."
    />
  );
};

export default InputText;
