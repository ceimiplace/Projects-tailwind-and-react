import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App mx-auto max-w-2xl ">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
