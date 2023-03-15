import styled from "styled-components";

const GameDetailCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.mainColor};
  font-family: ${(props) => props.theme.mainFont};
  line-height: 2rem;

  .detail-image {
    border-radius: 37px;
  }

  .detail-bio {
    color: ${(props) => props.theme.colors.mainButtonColor};
  }
`;

export default GameDetailCardStyled;
