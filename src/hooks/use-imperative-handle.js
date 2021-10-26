import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);
  useImperativeHandle(ref, () => ({
    toggleText() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button from child
      </button>

      {toggle && <h3>Toggle Text</h3>}
    </>
  );
});

export const UseImperavtiveHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <fieldset>
        <legend>Use Imperative Handle: </legend>
        <button
          onClick={() => {
            buttonRef.current.toggleText();
          }}
        >
          {" "}
          Button from parent
        </button>
        <Button ref={buttonRef} />
      </fieldset>
    </div>
  );
};
