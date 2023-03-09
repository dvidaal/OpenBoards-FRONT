import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.mainButtonColor};
  border-radius: ${(props) => props.theme.radiusLoginInputButton};
  width: 163.5px;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
`;

export default ButtonStyled;
