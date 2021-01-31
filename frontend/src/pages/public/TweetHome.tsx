import React from "react";
import {
  MainSection,
  Section1,
  Section2,
  Section3,
} from "../../styling/TweetHome";
import Navbar from "../../components/Navbar";

const TweetHome: React.FC = () => {
  return (
    <MainSection>
      <Section1>
        <Navbar />
      </Section1>
      <Section2>s</Section2>
      <Section3>d</Section3>
    </MainSection>
  );
};

export default TweetHome;
