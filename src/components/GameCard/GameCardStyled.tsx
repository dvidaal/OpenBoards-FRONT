import styled from "styled-components";

const GameCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  /*   background-color: #18182f */
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.colors.mainColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 30px;
  padding: 20px;
  width: 250px;
  height: 360px;

  img {
    padding: 10px;
    border-radius: 35px;
  }

  .info-container {
    display: flex;
    flex-direction: column;

    &__game-title {
      font-weight: bold;
      font-size: 1.5rem;
    }

    &__game-hour {
      color: ${(props) => props.theme.colors.datesColor};
      font-style: italic;
      font-size: 1.2rem;
    }

    &__game-free-space {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.mainButtonColor};
    }
  }
`;

export default GameCardStyled;
