import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled role="loader">
      <div className="loader">
        <span className="hour"></span>
        <span className="min"></span>
        <span className="circel"></span>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
