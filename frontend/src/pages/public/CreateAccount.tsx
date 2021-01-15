import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { APP_ACTIONS, StateContext } from "../../context/StateContext";
import { AiOutlineTwitter } from "react-icons/ai";
import axios from "axios";
import {
  MainSection,
  SecondarySection,
  ItemArray,
  FormSection,
  InputSpacer,
  ErrorMsg,
} from "../../styling/CreateAccount";

const CreateAccount: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [confirmedPassword, setConfirmedPassword] = useState<any>("");
  const [UIname, nameError] = useState<string>("");
  const [UIemail, emailError] = useState<string>("");
  const [UIpassword, passwordError] = useState<string>("");
  const [UIconfirmpassword, confirmpasswordError] = useState<string>("");
  const [UIdisplayname, displaynameError] = useState<string>("");

  const { name, displayName, email_address, password } = state;

  const handleSubmit = async () => {
    if (!state.name) {
      nameError("Enter your first name");
    } else {
      nameError("");
    }

    if (!state.displayName) {
      displaynameError("Enter a display name");
    } else {
      displaynameError("");
    }

    if (!state.email_address) {
      emailError("Enter an email address");
    } else {
      emailError("");
    }

    if (!state.password || state.password.length < 5) {
      passwordError("Enter a valid password (must be at least 5 characters)");
    } else {
      passwordError("");
    }

    if (state.password.length > 4 && state.password !== confirmedPassword) {
      confirmpasswordError("Passwords do not match");
    } else {
      confirmpasswordError("");
    }
  };

  return (
    <MainSection>
      <SecondarySection>
        <NavLink to="/">
          <div id="twitter-logo">
            <AiOutlineTwitter size={35} color={"black"} />
          </div>
        </NavLink>
        <ItemArray>
          <h1>Create your account</h1>
          <FormSection>
            {" "}
            <InputSpacer>
              <input
                type="text"
                onChange={(e) => {
                  dispatch({
                    type: APP_ACTIONS.UPDATE_NAME,
                    payload: e.target.value,
                  });
                }}
                placeholder="First name"
              />
              <ErrorMsg>{UIname}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input
                type="text"
                onChange={(e) => {
                  dispatch({
                    type: APP_ACTIONS.UPDATE_DISPLAY_NAME,
                    payload: e.target.value,
                  });
                }}
                placeholder="Desired display name"
              />
              <ErrorMsg>{UIdisplayname}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input
                type="text"
                onChange={(e) => {
                  dispatch({
                    type: APP_ACTIONS.UPDATE_EMAIL,
                    payload: e.target.value,
                  });
                }}
                placeholder="Email address"
              />
              <ErrorMsg>{UIemail}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input
                type="password"
                onChange={(e) => {
                  dispatch({
                    type: APP_ACTIONS.UPDATE_PASSWORD,
                    payload: e.target.value,
                  });
                }}
                placeholder="Password"
              />
              <ErrorMsg>{UIpassword}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input
                type="password"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                placeholder="Confirm password"
              />
              <ErrorMsg>{UIconfirmpassword}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              <button onClick={handleSubmit}>Join the fun!</button>
            </InputSpacer>
            <NavLink to="/login">Sign in Here</NavLink>
          </FormSection>
        </ItemArray>
      </SecondarySection>
    </MainSection>
  );
};

export default CreateAccount;
