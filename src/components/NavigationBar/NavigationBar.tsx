import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): JSX.Element => {
  return (
    <NavigationBarStyled>
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
      />
    </NavigationBarStyled>
  );
};

export default NavigationBar;
