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
  background-color: rgba(29, 161, 242, 1);

  // background-image: linear-gradient(
  //   to right bottom,
  //   rgba(29, 161, 242, 1),
  //   rgba(19, 153, 243, 0.8)
  // );
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 50%;

  img {
    height: 2.5rem;
    width: 5rem;
    cursor: text;
  }

  p {
    color: black;
    font-size: 1.1rem;

    font-weight: 700;
    font-family: "Segoe UI", Arial, sans-serif;

    :hover {
      color: white;
    }
  }
`;

export const ImgSpacer = styled.div`
  padding: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-rigth
  flex-direction: row;

  width: 20rem;
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
