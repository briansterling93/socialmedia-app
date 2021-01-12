import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import CreateAccount from "./pages/public/CreateAccount";

const Universal = createGlobalStyle`
 body {
    font-family: "Segoe UI", Arial, sans-serif;
    padding: 0;
    box-sizing: none;
    margin: 0;
    input {
      font-family: "Segoe UI";
    }

  //   ::-webkit-scrollbar{
  //     width: 0px;
  //     background: transparent;
  // }
  }
`;

function App() {
  return (
    <Router>
      <Universal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createaccount" component={CreateAccount} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
