import React from "react";
import { MainSection, TweetSection } from "../styling/ProfilePage";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import UserLikes from "./UserLikes";
import UserTweets from "./UserTweets";
import defaultHeader from "../imgs/defaultHeader.jpg";

const ProfilePage: React.FC = () => {
  return (
    <MainSection>
      <div id="container">
        <div id="header-title">
          <div id="back-arrow">
            <NavLink to="/home">
              {" "}
              <BiArrowBack />
            </NavLink>
          </div>
          <div id="name-tweets">
            <span id="name">Brian</span>
            <span id="tweets">2 Tweets</span>
          </div>
        </div>
        <div id="profile-container">
          <div id="profile-header"></div>
          <div id="profile-photo">BS</div>
          <div id="profile-info">
            <div id="user-name">Brian</div>
            <div id="at-name">@brian</div>
            <span id="follower-info">
              {" "}
              <div id="following-count">
                <b>1</b> following
              </div>
              <div id="followers-count">
                <b>4</b> followers
              </div>
            </span>
          </div>
        </div>
        <TweetSection>
          <div id="tweets-container">
            <div id="tweets-header">
              <div className="header-item">Tweets</div>

              <div className="header-item">Likes</div>
            </div>
            <div className="tweet-like-data">
              <UserTweets />
            </div>
          </div>
        </TweetSection>
      </div>
    </MainSection>
  );
};

export default ProfilePage;
