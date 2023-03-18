import { useAppSelector } from "../../store/hooks";
import NavigationBar from "../NavigationBar/NavigationBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return (
    <HeaderStyled>
      {isLogged && (
        <>
          <img
            src="/openBoardsLogo.webp"
            alt="Logo OpenBoards"
            width="89"
            height="38"
          />
        </>
      )}
      <NavigationBar />
    </HeaderStyled>
  );
};

export default Header;
