import styled from "styled-components";

export const MainSection = styled.div`
  background-color: white;

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
  background-color: #1da1f2;
  height: 100vh;
  width: 50%;
`;

export const ItemArray2 = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
`;

export const Form = styled.div`
  input {
    width: 15rem;
    height: 1.6rem;
    outline: none;
    border: 1.7px solid #999;

    :focus {
      outline: none;
      border-color: #1da1f2;
    }
  }
`;

export const ButtonSpacer = styled.div`
  padding: 0.4rem;

  button {
    width: 19rem;
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
  }

  .guestBtn {
    background-color: #1da1f2;
    color: white;
  }

  .createBtn {
    border: 1px solid #1da1f2;
  }
`;
