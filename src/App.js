import "./App.css";
import { Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout/Layout";
import Social from "./pages/Social/Social";
import SignUp from "./pages/SignUp/SignUp";
import Forum from "./pages/Forum/Forum";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/social">
          <Social />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
