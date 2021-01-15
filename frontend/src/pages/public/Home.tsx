import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  MainSection,
  SecondarySection,
  ItemArray1,
  ItemArray2,
  Form,
  ButtonSpacer,
  ImgSpacer,
  ImportedImg,
} from "../../styling/Home";

const Home: React.FC = () => {
  return (
    <div>
      <MainSection>
        <SecondarySection>
          <ItemArray1>
            <ImgSpacer>
              <ImportedImg>
                <AiOutlineSearch size={35} color={"white"} />
              </ImportedImg>
              <p>Follow your interests.</p>
            </ImgSpacer>
            <ImgSpacer>
              <ImportedImg>
                <MdPeopleOutline size={35} color={"white"} />
              </ImportedImg>
              <p>See what others are discussing.</p>
            </ImgSpacer>
            <ImgSpacer>
              <ImportedImg>
                <BiMessageRounded size={35} color={"white"} />
              </ImportedImg>
              <p>Connect with others.</p>
            </ImgSpacer>
          </ItemArray1>
          <ItemArray2>
            <div id="twitter-logo">
              <AiOutlineTwitter size={35} />
            </div>
            <div id="twitter-title">
              {" "}
              <h1>See what's happening in our world right now</h1>
            </div>
            <Form>
              <div id="join-language">Join Tweetclone Today.</div>
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
