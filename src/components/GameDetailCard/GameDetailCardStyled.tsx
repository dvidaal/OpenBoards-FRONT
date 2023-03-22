import styled from "styled-components";

const GameDetailCardStyled = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.mainColor};
  font-family: ${(props) => props.theme.mainFont};
  line-height: 2rem;

  .image-container {
    margin-bottom: 30px;
    border-bottom: 1px solid orange;
    &__detail-image {
      border-radius: 37px;
    }
  }

  .detail-bio {
    margin-top: 20px;
    color: ${(props) => props.theme.colors.mainButtonColor};
    font-size: 20px;
    font-weight: 800;
  }

  .detail-bio-about {
    color: #c8c8c8;
  }

  .detail-date {
    font-style: italic;
  }

  .detail-freespace {
    display: flex;
    justify-content: center;
    border: 2px solid grey;
    border-radius: 20px;
    width: 150px;
  }
`;

export default GameDetailCardStyled;
