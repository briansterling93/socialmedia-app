import React, { useEffect, useState, useContext } from "react";
import { MainSection } from "../styling/Tweets";
import { APP_ACTIONS, StateContext } from "../context/StateContext";

const Tweets: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [route, setRoute] = useState<any>("");

  useEffect(() => {
    console.log(state.token);
  }, []);
  const genUser = async () => {
    try {
      sessionStorage.setItem("token", state.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainSection>
      <div id="container">
        <div id="header-title">Latest Tweets</div>
      </div>
    </MainSection>
  );
};

export default Tweets;
