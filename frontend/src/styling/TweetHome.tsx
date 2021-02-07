import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Section1 = styled.div`
  width: 27%;
  height: 100vh;
  background-color: white;

  #navbar-component {
    padding-left: 2rem;
    padding-top: 0.5rem;
  }
`;

export const Section2 = styled.div`
  width: 37%;
  background-color: white;
  border-left: 0.5px solid #e8e8e8;
  border-right: 0.5px solid #e8e8e8;
`;

export const Section3 = styled.div`
  width: 36%;
  background-color: white;
`;
