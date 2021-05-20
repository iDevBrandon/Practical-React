import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/UI/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
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
