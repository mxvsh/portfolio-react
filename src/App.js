import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dark from "./pages/Dark";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dark" exact>
          <Dark />
        </Route>
      </Switch>
    </Router>
  );
}
