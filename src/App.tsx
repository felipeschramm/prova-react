import AuthPage from "./pages/Auth";
import ResetPasswordPage from "./pages/Reset";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import NewBetPage from "./pages/NewBet";
import AccountPage from './pages/Account'

import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const isAuth = useSelector((state: RootState) => state.user.isAuthenticated);
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
      {isAuth && (
        <Route path="/" exact>
          <HomePage />
        </Route>
      )}
      {isAuth && (
        <Route path="/new-bet">
          <NewBetPage />
        </Route>
      )}
      {isAuth && (
        <Route path="/account">
          <AccountPage/>
        </Route>
      )}
      {isAuth && (
        <Route path="*">
          <Redirect to="/" />
        </Route>
      )}
      {!isAuth && (
        <Route path="*">
          <Redirect to="/auth" />
        </Route>
      )}
      {!isAuth && (
        <Route path="/">
          <Redirect to="/auth" />
        </Route>
      )}
      {!isAuth && (
        <Route path="/new-bet">
          <Redirect to="/auth" />
        </Route>
      )}
    </Switch>
  );
}

export default App;
