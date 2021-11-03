import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { CustomHook } from "./hooks/custom-hooks/customHook";
import { UseCallback } from "./hooks/use-callback";
import { UseEffect } from "./hooks/use-effect";
import { UseImperavtiveHandle } from "./hooks/use-imperative-handle";
import { UseLayoutEffect } from "./hooks/use-layout-effect";
import { UseMemo } from "./hooks/use-memo";
import { UseReducer } from "./hooks/use-reducer";
import { UseRef } from "./hooks/use-ref";
import { UseState } from "./hooks/use-state";
import { UseConext } from "./hooks/useContext/use-context";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div>This app is for sample react hooks and routing.</div>
          </Route>
          <Route path="/custom-hook">
            <CustomHook />
          </Route>

          <Route path="/usecallback">
            <UseCallback />
          </Route>

          <Route path="/usememo">
            <UseMemo />
          </Route>
          <Route path="/usestate">
            <UseState />
          </Route>

          <Route path="/usereducer">
            <UseReducer />
          </Route>

          <Route path="/useeffect">
            <UseEffect />
          </Route>

          <Route path="/useref">
            <UseRef />
          </Route>

          <Route path="/uselayout">
            <UseLayoutEffect />
          </Route>

          <Route path="/useimperative">
            <UseImperavtiveHandle />
          </Route>

          <Route path="/usecontext">
            <UseConext />
          </Route>

          <Route path="*">
            <div>
              Page not found. <Link to="/">Go to Home</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
