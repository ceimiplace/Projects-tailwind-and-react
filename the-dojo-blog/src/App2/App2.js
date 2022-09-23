import Navigation from "./Navigation";
import Home from "./Home";
import MainContainer from "./MainContentContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import FullBlogDetails from "./FullBlogDetails";
export default function App2() {
  return (
    <Router>
      <div className="flex  border-2 border-grey flex-col max-w-4xl min-h-screen mx-auto">
        <Navigation />
        <MainContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <FullBlogDetails exact path="/blogs/:id" />
            </Route>
            <Route>
              <CreateBlog exact path="/create" />
            </Route>
          </Switch>
        </MainContainer>
      </div>
    </Router>
  );
}
