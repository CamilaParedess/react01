import "./NavBar.css";
/* import logo from "../../logo.svg"; */
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar-container">
          <Link to={"/"}>
            <img src="https://www.maybelline.com.ar/~/media/mny/global/header/logo_v3.png" className="NavBar-logo" alt="logo" />
            </Link>
          <div className="NavBar-navLinks">
            <ul>
              <li>
              <NavLink
              to={"category/Labial"}
              style={({ isActive }) => (isActive ? { color: "rgb(56, 0, 146)" } : {})}
            >
              Labiales
            </NavLink>
              </li>
              <li>
              <NavLink
              to={"category/Base"}
              style={({ isActive }) => (isActive ? { color: "rgb(56, 0, 146)" } : {})}
            >
              Bases
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"category/Rimmel"}
              style={({ isActive }) => (isActive ? { color: "rgb(56, 0, 146" } : {})}
            >
              Rimmel
            </NavLink>
              </li>
              <li>
              <NavLink
              to={"/contact"}
              style={({ isActive }) => (isActive ? { color: "rgb(56, 0, 146)" } : {})}
            >
              Contacto
            </NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      );
}

export default NavBar;