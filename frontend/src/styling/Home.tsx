import styled from "styled-components";

export const MainSection = styled.div`
  background-color: #73c3f7;
  display: flex;
  justify-content: center;
  font-family: "Segoe UI", Arial, sans-serif;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;

  flex-direction: row;
`;

export const ItemArray = styled.div`
  display: flex;

  flex-direction: row;

  h1 {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }
`;

export const ItemArray1 = styled.div`
  background-color: #0793f0;

  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 50%;

  p {
    color: white;
    font-size: 1.2rem;

    font-weight: 700;
  }
`;

export const ImgSpacer = styled.div`
  padding: 0.6rem;

  display: flex;
  align-items: center;
  p {
    padding-left: 1rem;
  }
  flex-direction: row;
  width: 25rem;
`;

export const ImportedImg = styled.div``;

export const ItemArray2 = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;

  h1 {
    font-size: 1.7rem;
  }

  #twitter-title {
    height: 10rem;
    width: 20rem;
    text-align: left;
  }

  #twitter-logo {
    text-align: left;
    width: 20rem;
  }

  #join-language {
    font-weight: 700;
    font-size: 0.9rem;
    text-align: left;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
  }
`;

export const Form = styled.div`
  input {
    width: 15rem;
    height: 1.6rem;
    outline: none;
    border: 1.7px solid #999;
  }
`;

export const ButtonSpacer = styled.div`
  padding: 0.4rem;

  button {
    width: 21rem;
    height: 2.5rem;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }

  .loginBtn {
    background-color: #1da1f2;
    color: white;

    :hover {
      background-color: #007cce;
    }
  }

  .guestBtn {
    background-color: #1da1f2;
    color: white;

    :hover {
      background-color: #007cce;
    }
  }

  .createBtn {
    border: 1px solid #1da1f2;

    :hover {
      background-color: #f0faff;
    }
  }
`;
