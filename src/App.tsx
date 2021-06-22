import AuthPage from "./pages/AuthPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NewBetPage from "./pages/NewBetPage";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/reset">
        <ResetPasswordPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="new-bet">
        <NewBetPage />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
