import styled from "styled-components";

const CreateFormStyled = styled.form`
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

      &--date {
        background-color: #000000;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      }
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.mainButtonColor};
      border-radius: ${(props) => props.theme.radiusLoginInputButton};
      width: 163.5px;
      height: 40px;
      font-weight: bold;
      font-size: 16px;
      :disabled {
        opacity: 0.57;
      }
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

export default CreateFormStyled;
