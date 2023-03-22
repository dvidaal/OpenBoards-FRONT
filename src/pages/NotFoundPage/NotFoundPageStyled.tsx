import styled from "styled-components";

const NotFoundPageStyled = styled.article`
  .notFound-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    &__404 {
      padding: 20px;
      font-family: ${(props) => props.theme.mainFont};
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.mainColor};
    }

    &__logo {
      margin-left: 50px;
    }

    &__home {
      color: ${(props) => props.theme.colors.mainButtonColor};
      font-family: ${(props) => props.theme.mainFont};
    }
  }
`;

export default NotFoundPageStyled;
