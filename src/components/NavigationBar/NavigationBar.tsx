import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();
  return (
    <NavigationBarStyled>
      {isLogged && (
        <>
          <NavLink to="/">
            <img
              src="/house.webp"
              alt="Icono de una casa para ir al inicio de la app"
              width="36"
              height="36"
            />
          </NavLink>
          <img
            src="/logout.webp"
            alt="Icono para cerrar sesión"
            width="36"
            height="36"
            className="logout"
            onClick={logoutUser}
          />
        </>
      )}
    </NavigationBarStyled>
  );
};

export default NavigationBar;
