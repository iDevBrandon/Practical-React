import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      {/* header */}

      {/* App body */}
      {/* sidebar */}
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;
