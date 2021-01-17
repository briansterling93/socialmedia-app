import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { APP_ACTIONS, StateContext } from "../../context/StateContext";
import {
  MainSection,
  SecondarySection,
  ItemArray,
  FormSection,
  InputSpacer,
  ErrorMsg,
} from "../../styling/CreateAccount";

const Login: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [credentialsError, setError] = useState<string>("Invalid Credentials.");

  const { email_address, password } = state;

  const handleInput = async () => {
    try {
      let loggedInUser = {
        email_address: state.email_address,
        password: state.password,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(loggedInUser);

      // const res = await axios.post("", body, config);

      // if (res.data === "Display name already in use") {
      //   displaynameError("Display name already in use");
      // }
    } catch (error) {
      console.log(error);
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
          <h1>Log in to Tweetclone</h1>
          <FormSection>
            {" "}
            <InputSpacer>
              <input type="text" placeholder="Email address" />
            </InputSpacer>
            <InputSpacer>
              {" "}
              <input type="password" placeholder="Password" />
              <ErrorMsg>{credentialsError}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              {" "}
              {/* <NavLink to="/"> */}
              <button onClick={handleInput}>Log in</button>
              {/* </NavLink> */}
            </InputSpacer>
            <NavLink to="/createaccount">Create an account here</NavLink>
          </FormSection>
        </ItemArray>
      </SecondarySection>
    </MainSection>
  );
};

export default Login;
