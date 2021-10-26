import "./App.css";
import { UseEffect } from "./hooks/use-effect";
import { UseReducer } from "./hooks/use-reducer";
import { UseRef } from "./hooks/use-ref";
import { UseState } from "./hooks/use-state";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
    </div>
  );
}

export default App;
