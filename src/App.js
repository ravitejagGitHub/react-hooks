import "./App.css";
import { UseEffect } from "./hooks/use-effect";
import { UseImperavtiveHandle } from "./hooks/use-imperative-handle";
import { UseLayoutEffect } from "./hooks/use-layout-effect";
import { UseMemo } from "./hooks/use-memo";
import { UseReducer } from "./hooks/use-reducer";
import { UseRef } from "./hooks/use-ref";
import { UseState } from "./hooks/use-state";
import { UseConext } from "./hooks/useContext/use-context";

function App() {
  return (
    <div className="App">
      <UseMemo />
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperavtiveHandle />
      <UseConext />
    </div>
  );
}

export default App;
