import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__logo {
      width: 227px;
      height: 98px;
    }

    &__slogan {
      padding: 8px;
      color: ${(props) => props.theme.colors.secondaryColorLogin};
      font-family: ${(props) => props.theme.mainFont};
      font-size: 12px;
    }
  }
`;

export default LoginPageStyled;
