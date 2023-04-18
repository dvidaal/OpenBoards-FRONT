import styled from "styled-components";

const GameCardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 30px;
  justify-items: center;
`;

export default GameCardListStyled;
