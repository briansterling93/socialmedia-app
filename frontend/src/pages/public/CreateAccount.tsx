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

const CreateAccount: React.FC = () => {
  return (
    <MainSection>
      <SecondarySection>
        <ItemArray>
          <h1>Create an account</h1>
          <FormSection>
            {" "}
            <InputSpacer>
              <input type="text" placeholder="First name" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input type="text" placeholder="Desired display name" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input type="password" placeholder="Password" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input type="password" placeholder="Confirm password" />
              <ErrorMsg></ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <NavLink to="/">
                <button>Join the fun!</button>
              </NavLink>
            </InputSpacer>
          </FormSection>
        </ItemArray>
      </SecondarySection>
    </MainSection>
  );
};

export default CreateAccount;
