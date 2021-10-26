import "./App.css";
import { UseEffect } from "./hooks/use-effect";
import { UseReducer } from "./hooks/use-reducer";
import { UseState } from "./hooks/use-state";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <UseEffect />
    </div>
  );
}

export default App;
