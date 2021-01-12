import React from "react";
import { NavLink } from "react-router-dom";
import {
  MainSection,
  SecondarySection,
  ItemArray1,
  ItemArray2,
  Form,
  ButtonSpacer,
  ImgSpacer,
} from "../../styling/Home";
import homeLogo1 from "../../imgs/homeLogo1.png";
import homeLogo2 from "../../imgs/homeLogo2.png";
import homeLogo3 from "../../imgs/homeLogo3.png";

const Home: React.FC = () => {
  return (
    <div>
      <MainSection>
        <SecondarySection>
          <ItemArray1>
            <ImgSpacer>
              <img src={homeLogo1} />
              <p>Join the discussion!</p>
            </ImgSpacer>
            <ImgSpacer>
              <img src={homeLogo2} />
              <p>Voice your opinions</p>
            </ImgSpacer>
            <ImgSpacer>
              <img src={homeLogo3} />
              <p>Connect with others</p>
            </ImgSpacer>
          </ItemArray1>
          <ItemArray2>
            <h1>
              See what's happening in <br /> the sports world!
            </h1>
            <Form>
              <ButtonSpacer>
                <button className="guestBtn">Continue as Guest</button>
              </ButtonSpacer>
              <ButtonSpacer>
                <NavLink to="/createaccount">
                  <button className="createBtn">Create an Account</button>
                </NavLink>
              </ButtonSpacer>
              <ButtonSpacer>
                <NavLink to="login">
                  <button className="loginBtn">Log In</button>
                </NavLink>
              </ButtonSpacer>
            </Form>
          </ItemArray2>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Home;
