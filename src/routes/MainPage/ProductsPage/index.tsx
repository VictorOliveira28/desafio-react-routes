import { Outlet } from "react-router-dom";
import "./styles.css";

export default function ProductsPage() {
  return (
    <>
      <div className="categories-container">
        <div>Computadores</div>
        <div>Eletrônicos</div>
        <div>Livros</div>
      </div>

      <Outlet />
    </>
  );
}
