import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  background-color: transparent;

  #container {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 20rem;
    background-color: white;
    margin-left: 2rem;
  }

  #trending {
    margin-top: 0.5rem;
    background-color: #f1f4f6;
    width: 18rem;
    height: 19rem;
    border-radius: 1rem;
  }

  #trending-container {
    #title {
      font-weight: 900;
      font-size: 1.1rem;
      border-bottom: 0.5px solid #e8e8e8;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 1rem;
      height: 2.5rem;
    }
  }

  #who-to-follow {
    margin-top: 1rem;
    background-color: #f1f4f6;
    width: 18rem;
    height: 15rem;
    border-radius: 1rem;
  }

  #who-to-follow-container {
    #title {
      font-weight: 900;
      font-size: 1.1rem;
      border-bottom: 0.5px solid #e8e8e8;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 1rem;
      height: 2.5rem;
    }
  }
`;
