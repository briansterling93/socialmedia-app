import styled from "styled-components";

export const MainSection = styled.div`
  height: 2rem;
  background-color: black;
  font-size: 1rem;
  diplay: flex;
  justify-content: center;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-family: "Open Sans", arial, sans-serif;
    text-decoration: none;
    color: #5b5959;
    font-weight: 500;
    font-size: 0.9rem;
    :hover {
      color: #5b5959;
      font-weight: 700;
    }
  }
`;
