import React from "react";
import {
  MainSection,
  Section1,
  Section2,
  Section3,
} from "../../styling/TweetHome";
import Navbar from "../../components/Navbar";
import Tweets from "../../components/Tweets";

const TweetHome: React.FC = () => {
  return (
    <MainSection>
      <Section1>
        <div id="navbar-component">
          <Navbar />
        </div>
      </Section1>
      <Section2>
        <Tweets />
      </Section2>
      <Section3>d</Section3>
    </MainSection>
  );
};

export default TweetHome;
