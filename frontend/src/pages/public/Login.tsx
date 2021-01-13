import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "../../imgs/mainLogo.png";
import {
  MainSection,
  SecondarySection,
  ItemArray,
  FormSection,
  InputSpacer,
  ErrorMsg,
} from "../../styling/CreateAccount";

const Login: React.FC = () => {
  return (
    <MainSection>
      <SecondarySection>
        <NavLink to="/">
          {" "}
          <img src={mainLogo} />
        </NavLink>
        <ItemArray>
          <h1>Log in to Sports-Connect</h1>
          <FormSection>
            {" "}
            <InputSpacer>
              <input type="text" placeholder="Email address" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input type="password" placeholder="Password" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <NavLink to="/">
                <button>Log in</button>
              </NavLink>
            </InputSpacer>
            <NavLink to="/createaccount">Create an account here</NavLink>
          </FormSection>
        </ItemArray>
      </SecondarySection>
    </MainSection>
  );
};

export default Login;
