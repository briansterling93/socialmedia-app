import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  // background-color: #999;

  #header-title {
    background-color: white;
    font-size: 1rem;
    font-weight: 900;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;
    align-items: center;
    border-bottom: 0.5px solid #e8e8e8;

    #back-arrow {
      font-size: 1.3rem;

      a {
        color: #1da1f2;

        :hover {
          color: #007cce;
        }
      }
    }

    #name-tweets {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;

      #name {
        font-weight: 900;
        font-size: 1rem;
      }

      #tweets {
        color: #777777;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }

  #profile-container {
    height: 21rem;
    width: 100%;
    // background-color: #999;
  }

  #profile-header {
    height: 8rem;
    width: 100%;
    background-color: #1da1f2;
  }

  #profile-photo {
    height: 7rem;
    width 7rem;
    border: 4px solid white;
    border-radius: 6rem;
    background-color: #E2E2E2;
    margin-top: -3.5rem;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  #profile-info {
    margin-left: 1rem
  }

  #user-name {
    font-weight: 900;
    font-size: 1.2rem;
  }

  #at-name {
    font-size: 1rem;
    font-weight: 400;
    color: #777777;
  }

  #follower-info {
    margin-top: .3rem;
    font-size: .9rem;
    display: flex;
    flex-direction: row;
   
    #followers-count {
      padding-left: 1.5rem;
    }
  }

`;
