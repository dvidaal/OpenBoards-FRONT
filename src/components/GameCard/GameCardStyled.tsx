import styled from "styled-components";

const GameCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(239, 139, 48, 1) 1px 1px 4px;
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.colors.mainColor};
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
