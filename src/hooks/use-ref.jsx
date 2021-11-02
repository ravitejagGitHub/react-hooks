import { useRef, useState } from "react";

export const UseRef = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("Default Name");

  const onClick = (event) => {
    setName(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <fieldset>
        <legend>Use Ref: {name} </legend>
        <input type="text" placeholder="User name" ref={inputRef} />
        <button onClick={onClick}> Change Name </button>
        &nbsp;
      </fieldset>
    </div>
  );
};
