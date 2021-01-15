import styled from "styled-components";

export const MainSection = styled.div`
  background-color: white;
  height: 100vh;
  color: black;
  margin-top: 0.5rem;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ItemArray = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 29rem;
    height: 3rem;
    outline: none;
    border: 2px solid #d8d8d8;
    font-size: 1.1rem;

    :focus {
      outline: none;
      border-color: #1da1f2;
    }
  }

  button {
    width: 31rem;
    color: white;
    height: 3rem;
    background-color: #1da1f2;
    outline: none;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 600;
    font-size: 1rem;

    :hover {
      background-color: #007cce;
    }
  }

  a {
    text-decoration: none;

    color: rgba(27, 149, 224);
  }
`;

export const InputSpacer = styled.div`
  padding: 0.8rem;
`;

export const ErrorMsg = styled.div`
  height: 0.3rem;
  font-weight: 500;
  color: #ce3030;
  font-size: 0.9rem;
`;
