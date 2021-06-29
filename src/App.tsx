import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Loading from "./Pages/Loading";
import Login from "./Pages/Login";

type AuthStatus = "auth" | "unauth" | "loading";

const App: React.FC = () => {
  //STATES
  const [auth, setAuth] = useState<AuthStatus>("auth");

  //EFFECTS
  //Initial Effect
  useEffect(() => {

  }, []);

  return (
    <Router>
      {auth !== "loading" ? (
        <Switch>
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
};

export default App;
