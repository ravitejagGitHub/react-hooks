import "./App.css";
import { UseReducer } from "./hooks/use-reducer";
import { UseState } from "./hooks/use-state";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
    </div>
  );
}

export default App;
