import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return (
    <HeaderStyled>
      {isLogged && (
        <>
          <img
            src="openBoardsLogo.webp"
            alt="Logo OpenBoards"
            width="89"
            height="38"
          />
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;
