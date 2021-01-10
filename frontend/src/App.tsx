import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/public/Home";

const Universal = createGlobalStyle`
 body {
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
    <div>
      <Home />
    </div>
  );
}

export default App;
