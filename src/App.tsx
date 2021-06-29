import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import Dashboard from "./Pages/Dashboard";
import Loading from "./Pages/Loading";
import Login from "./Pages/Login";
import Tests from "./Pages/Tests";

type AuthStatus = "auth" | "unauth" | "loading";

const App: React.FC = observer(() => {
  //CUSTOM HOOKS & VARIABLES
  const { validate } = useAuth();

  //STATES
  const [auth, setAuth] = useState<AuthStatus>("loading");

  //EFFECTS
  //Initial Effect
  useEffect(() => {
    const fetch = async () => {
      setAuth((await validate()) ? "auth" : "unauth");
    };
   
    fetch();
  }, []);

  return (
    <Router>
      {auth !== "loading" ? (
        <Switch>
          <Route exact path="/tests" component={Tests} />
          <Route exact path="/login">
            {auth === "auth" ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/dashboard">
            {auth === "auth" ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="*">
            {auth === "auth" ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      ) : (
        <Loading />
      )}
    </Router>
  );
});

export default App;
