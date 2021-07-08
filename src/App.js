import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Test from "./components/Test";
import Layout from "./layout/Layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/browse"></Redirect>
        </Route>
        <Route path="/browse">
          <Test />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
