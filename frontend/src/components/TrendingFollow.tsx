import React from "react";
import { MainSection } from "../styling/TrendingFollow";

const TrendingFollow: React.FC = () => {
  return (
    <MainSection>
      <div id="container">
        <div id="trending">
          <div id="trending-container">
            <div id="title">What's trending</div>
          </div>
        </div>
        <div id="who-to-follow">
          <div id="who-to-follow-container">
            <div id="title">Who to follow</div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default TrendingFollow;
