import styled from "styled-components";

const LoaderStyled = styled.article`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 65px;
    height: 65px;
    border: 8px solid ${(props) => props.theme.colors.mainButtonColor};
    border-radius: 50px;
    position: relative;
  }

  .loader span {
    display: block;
    background: ${(props) => props.theme.colors.mainButtonColor};
  }

  .loader .hour,
  .loader .min {
    width: 6px;
    height: 22px;
    border-radius: 50px;
    position: absolute;
    top: 24.5px;
    left: 21px;
    animation: load9243 1.2s linear infinite;
    transform-origin: top center;
  }

  .loader .min {
    height: 17px;
    animation: load9243 4s linear infinite;
  }

  .loader .circel {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    position: absolute;
    top: 19px;
    left: 19px;
  }

  @keyframes load9243 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
