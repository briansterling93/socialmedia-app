import React from "react";
import {
  MainSection,
  Section1,
  Section2,
  Section3,
} from "../../styling/TweetHome";
import Navbar from "../../components/Navbar";
import ProfilePage from "../../components/ProfilePage";
import TrendingFollow from "../../components/TrendingFollow";

const Profile: React.FC = () => {
  return (
    <MainSection>
      <Section1>
        <div id="navbar-component">
          <Navbar />
        </div>
      </Section1>
      <Section2>
        <ProfilePage />
      </Section2>
      <Section3>
        <TrendingFollow />
      </Section3>
    </MainSection>
  );
};

export default Profile;
