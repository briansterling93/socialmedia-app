import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateContext, initialState, reducer } from "./context/StateContext";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/public/Home";
import Profile from "./pages/private/Profile";
import Login from "./pages/public/Login";
import TweetHome from "./pages/public/TweetHome";
import CreateAccount from "./pages/public/CreateAccount";
import UserLikes from "./components/UserLikes";
import UserTweets from "./components/UserTweets";

const Universal = createGlobalStyle`
 body {
    font-family: "Segoe UI", Arial, sans-serif;
    padding: 0;
    box-sizing: none;
    margin: 0;
    input {
      font-family: "Segoe UI";
    }


`;

function App() {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Universal />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/usertweets" component={UserTweets} />
          <Route exact path="/userlikes" component={UserLikes} />
          <Route exact path="/home" component={TweetHome} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
