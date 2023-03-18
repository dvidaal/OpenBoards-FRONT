import styled from "styled-components";

const GameCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  border: rgba(239, 139, 48, 1) 2px solid;
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.colors.mainColor};
  border-radius: 30px;
  padding: 20px;
  width: 250px;
  height: 400px;

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

  .prueba {
    border-radius: 50px;
  }
`;

export default GameCardStyled;
