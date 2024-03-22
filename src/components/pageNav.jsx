import { NavLink } from "react-router-dom";

function pageNav() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>

      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
    </ul>
  );
}

export default pageNav;
