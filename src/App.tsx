import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/Auth";

function App() {
  return (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
