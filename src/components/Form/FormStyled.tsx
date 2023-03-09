import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.mainFont};

  label {
    color: ${(props) => props.theme.mainColor};
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 20px;
  }

  .input-login {
    display: flex;
    flex-direction: column;
    border: ${(props) => props.theme.inputLoginFormBorder};
    border-radius: ${(props) => props.theme.radiusLoginInputButton};
    width: 270px;
    height: 40px;
    padding: 10px 16px;
    background: ${(props) => props.theme.inputLoginFormBackground};
    color: ${(props) => props.theme.mainColor};
  }
`;

export default FormStyled;
