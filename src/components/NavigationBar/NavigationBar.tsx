import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): JSX.Element => {
  const { logoutUser } = useUser();
  return (
    <NavigationBarStyled>
      <>
        <NavLink to="/" title="home">
          <img
            src="/house.webp"
            alt="Icono de una casa para ir al inicio de la app"
            width="36"
            height="36"
            aria-label="home"
          />
        </NavLink>
        <NavLink to="/create" title="blades">
          <img
            src="blades.webp"
            alt="Espadas para crear partida"
            width="36"
            height="36"
            aria-label="blades"
          />
        </NavLink>
        <img
          src="/logout.webp"
          alt="Icono para cerrar sesión"
          width="36"
          height="36"
          aria-label="logout"
          className="logout"
          onClick={logoutUser}
        />
      </>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
