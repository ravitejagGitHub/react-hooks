import { useEffect, useLayoutEffect, useRef } from "react";

export const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    //load before page loads
    inputRef.current.value = "loading name....";
  });

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.value = "Raviteja";
    }, 2000);
  });

  return (
    <div>
      <fieldset>
        <legend>Use Layout Effect: </legend>
        <input type="text" placeholder="User name" ref={inputRef} />
      </fieldset>
    </div>
  );
};
