import styled from "styled-components";

const GameCardStyled = styled.div`
  width: 169px;
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 10px;
  }

  .info-container {
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.colors.mainColor};
    background-color: ${(props) => props.theme.colors.cardBackground};
    border-radius: 10px;

    &__game-title {
      font-weight: bold;
      font-size: 1.5rem;
    }

    &__game-hour {
      color: ${(props) => props.theme.colors.datesColor};
      font-style: italic;
      font-size: 1rem;
    }

    &__game-free-space {
      color: ${(props) => props.theme.colors.mainButtonColor};
    }
  }
`;

export default GameCardStyled;
