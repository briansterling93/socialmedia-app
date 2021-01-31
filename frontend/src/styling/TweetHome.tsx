import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Section1 = styled.div`
  width: 24%;
  height: 100vh;
  background-color: white;
  border-right: 0.5px solid #e8e8e8;

  #navbar-component {
    padding-left: 2rem;
    padding-top: 0.5rem;
  }
`;

export const Section2 = styled.div`
  width: 49%;
  background-color: white;
`;

export const Section3 = styled.div`
  width: 27%;
  background-color: #999;
`;
