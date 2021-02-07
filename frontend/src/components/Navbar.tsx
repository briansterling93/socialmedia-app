import React from "react";
import { MainSection, TextDiv } from "../styling/Navbar";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { BsBookmark, BsCardList, BsPerson, BsHash } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <div>
      <MainSection>
        <TextDiv>
          <div className="NavBarItem">
            <div className="NavBarImg" id="navbar-header">
              <AiOutlineTwitter />
            </div>
          </div>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                <AiOutlineHome />
              </div>
              <div className="NavBarTxt">Home</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                <BsHash />
              </div>
              <div className="NavBarTxt">Explore</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                <AiOutlineBell />
              </div>
              <div className="NavBarTxt">Notifications</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                {" "}
                <AiOutlineMail />
              </div>
              <div className="NavBarTxt">Messages</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                <BsBookmark />
              </div>
              <div className="NavBarTxt">Bookmarks</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                {" "}
                <BsCardList />
              </div>
              <div className="NavBarTxt">Lists</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                <BsPerson />
              </div>
              <div className="NavBarTxt">Profile</div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="NavBarItem">
              <div className="NavBarImg">
                <AiOutlineSetting />
              </div>
              <div className="NavBarTxt">More</div>
            </div>
          </NavLink>
          <div className="NavBarItem">
            <div id="navbar-footer">
              <button>Tweet</button>
            </div>
          </div>
        </TextDiv>
      </MainSection>
    </div>
  );
};

export default Navbar;
