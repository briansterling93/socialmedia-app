import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateContext, initialState, reducer } from "./context/StateContext";
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
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
