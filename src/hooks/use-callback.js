import { useEffect, useState } from "react";

const Child = ({ returnData }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED!");
  }, [returnData]);

  return <div>{returnData()}</div>;
};

export const UseCallback = () => {
  const [data] = useState("Sample data");
  const [toggle, setToggle] = useState(false);

  const returnData = () => {
    return data;
  };

  return (
    <div>
      <fieldset>
        <legend>Use Callback:</legend>
        <Child returnData={returnData} />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h4>Toggle Text</h4>}
      </fieldset>
    </div>
  );
};
