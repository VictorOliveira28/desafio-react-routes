import "./styles.css";
import imgHome from "../../../assets/home.svg";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="hd-container">
        <nav className="nav-hd-container">
          <div className="nav-menu-container">
            <div>Início</div>
            <div>Produtos</div>
            <div>Sobre nós</div>
          </div>
          <div className="nav-home-button">
            <img src={imgHome} alt="Página inicial" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
