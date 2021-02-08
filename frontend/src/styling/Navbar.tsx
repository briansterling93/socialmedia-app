import styled from "styled-components";

export const MainSection = styled.div`
  height: 2rem;
  background-color: transparent;
  font-size: 1rem;
  diplay: flex;
  justify-content: center;
  margin-left: 6rem;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  a {
    color: black;
    text-decoration: none;

    :hover {
      color: #1da1f2;
    }
  }

  button {
    width: 11rem;
    height: 2.4rem;
    background-color: #1da1f2;
    outline: none;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    color: white;
    :hover {
      background-color: #007cce;
    }
  }
  .NavBarItem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 2rem;

    :hover {
      border-radius: 2rem;
      font-weight: 750;
      .NavBarImg {
        color: #1da1f2;
      }
    }
  }
  .NavBarImg {
    font-size: 1.7rem;
    color: #252525;
    width: 2.5rem;
  }
  .NavBarTxt {
    width: 5rem;
    font-weight: 700;
    font-size: 1.1rem;
    height: 2rem;
  }
  #navbar-header {
    padding-bottom: 0.8rem;
    width: 7.5rem;
    font-size: 1.9rem;
    color: #1da1f2;
  }
  #navbar-footer {
    padding-top: 0.3rem;
    padding-right: 0.6rem;
    width: 7.5rem;
  }
`;
