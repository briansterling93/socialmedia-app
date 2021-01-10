import React from "react";
import {
  MainSection,
  SecondarySection,
  ItemArray1,
  ItemArray2,
  Form,
  ButtonSpacer,
} from "../../styling/Home";

const Home: React.FC = () => {
  return (
    <div>
      <MainSection>
        <SecondarySection>
          <ItemArray1>Background image</ItemArray1>
          <ItemArray2>
            {" "}
            <h1>
              See what's happening in <br /> the sports world!
            </h1>
            <Form>
              <ButtonSpacer>
                <button className="guestBtn">Continue as Guest</button>
              </ButtonSpacer>
              <ButtonSpacer>
                <button className="createBtn">Create an Account</button>
              </ButtonSpacer>
              <ButtonSpacer>
                <button className="loginBtn">Log In</button>
              </ButtonSpacer>
            </Form>
          </ItemArray2>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Home;
