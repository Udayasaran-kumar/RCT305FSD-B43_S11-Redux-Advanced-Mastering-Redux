import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/quiz" component={Quiz} />
        <PrivateRoute path="/result" component={Result} />
        <Route path="*" render={() => <h2>404 - Page Not Found</h2>} />
      </Switch>
    </Router>
  );
};

export default App;
