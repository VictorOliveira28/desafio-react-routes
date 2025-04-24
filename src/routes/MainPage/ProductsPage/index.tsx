import "./styles.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      <div className="categories-container">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active" : "nav-disabled"
          }
          to={"/produtos/computadores"}
        >
          <div>Computadores</div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active" : "nav-disabled"
          }
          to={"/produtos/eletronicos"}
        >
          <div>Eletrônicos</div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active" : "nav-disabled"
          }
          to={"/produtos/livros"}
        >
          <div>Livros</div>
        </NavLink>
      </div>

      <Outlet />
    </>
  );
}
