import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.mainFont};

  .form {
    &__field {
      display: flex;
      flex-direction: column;
      border: 1px solid #56585b;
      border-radius: ${(props) => props.theme.radiusLoginInputButton};
      width: 270px;
      height: 40px;
      padding: 10px 16px;
      background: ${(props) => props.theme.colors.inputLoginFormBackground};
      color: ${(props) => props.theme.colors.mainColor};
    }
  }

  label {
    color: ${(props) => props.theme.colors.mainColor};
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 20px;
  }
`;

export default LoginFormStyled;
