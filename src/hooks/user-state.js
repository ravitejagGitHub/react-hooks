import { useState } from "react"

export const UseState = ()=> {
    const [counter, setCounter]= useState(0);

    const increment = ()=>{
        setCounter(counter+1);
    }

    const decrement = ()=>{
        setCounter(counter-1);
    }

    return (
        <div>
            <fieldset>
                <legend>Counter:</legend>
                {counter} &nbsp;&nbsp;
                <button onClick={increment}> + </button>
                &nbsp;
                <button onClick={decrement}> - </button>
            </fieldset>
        </div>
    );
}