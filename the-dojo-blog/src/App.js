import Navbar from "./component/Navbar";
import Home from "./component/Home";
import CreateBlog from "./component/CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./component/BlogDetails";
function App() {
  return (
    <Router>
      <div className="App mx-auto max-w-2xl ">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
