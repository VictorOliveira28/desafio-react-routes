import "./styles.css";
import imgHome from "../../../assets/home.svg";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="hd-container">
        <nav className="nav-hd-container">
          <div className="nav-menu-container">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-disabled"
              }
              to={"/"}
            >
              <div>Início</div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-disabled"
              }
              to={"/produtos"}
            >
              <div>Produtos</div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-disabled"
              }
              to={"/sobre-nos"}
            >
              <div>Sobre nós</div>
            </NavLink>
          </div>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-disabled"
            }
            to={"/"}
          >
            <div className="nav-home-button">
              <img src={imgHome} alt="Página inicial" />
            </div>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
