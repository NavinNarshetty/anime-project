import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout/Layout";
import Social from "./pages/Social/Social";
import SignUp from "./pages/SignUp/SignUp";
import Forum from "./pages/Forum/Forum";
import MyList from "./pages/MyList/MyList";
import AnimeDetail from "./pages/Detail/AnimeDetail";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Error from "./pages/Error/Error";
function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        {authCtx.isLoggedIn && <Route path="/" exact>
          <Home />
        </Route>}
        <Route path="/browse">
          <Browse />
        </Route>
        {authCtx.isLoggedIn&& <Route path="/anime/:id">
          <AnimeDetail />
        </Route>}
        <Route path="/social">
          <Social />
        </Route>
        {!authCtx.isLoggedIn && <Route path="/signup">
         <SignUp />
        </Route>}
        <Route path="/forum">
          <Forum />
        </Route>
        {authCtx.isLoggedIn && <Route path="/mylist">
          <MyList />
        </Route>}
        <Route path="*">
          {authCtx.isLoggedIn && <Error />}
          {!authCtx.isLoggedIn && <Redirect to="/signup"/>}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
