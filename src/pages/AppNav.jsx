import { NavLink } from "react-router-dom";
import style from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="cities">city</NavLink>
        </li>

        <li>
          <NavLink to="countries">country</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
