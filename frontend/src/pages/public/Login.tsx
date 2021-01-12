import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <ItemArray>
          <h1>Sign in</h1>
          <FormSection>
            {" "}
            <InputSpacer>
              <input type="text" placeholder="Email address" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input type="text" placeholder="Password" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <NavLink to="/">
                <button>Login</button>
              </NavLink>
            </InputSpacer>
            Don't have an account?
            <NavLink to="/createaccount">Create one here</NavLink>
          </FormSection>
        </ItemArray>
      </SecondarySection>
    </MainSection>
  );
};

export default Login;
