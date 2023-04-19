import styled from "styled-components";

const RegisterPageStyled = styled.div`
  .register-page {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-size: 16px;
      color: ${(props) => props.theme.colors.mainColor};
      font-family: ${(props) => props.theme.mainFont};
      font-style: italic;
      font-weight: 400;
    }
  }
`;

export default RegisterPageStyled;
