import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./routes/MainPage";
import Header from "./components/Header";
import ProductsPage from "./routes/MainPage/ProductsPage";
import ComputersPage from "./routes/MainPage/ProductsPage/ComputersPage";
import BooksPage from "./routes/MainPage/ProductsPage/BooksPage";
import ElectronicsPage from "./routes/MainPage/ProductsPage/ElectronicsPage";
import AboutUs from "./routes/AboutUs";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="produtos" element={<ProductsPage />}>
            <Route path="computadores" element={<ComputersPage />} />
            <Route path="livros" element={<BooksPage />} />
            <Route path="eletronicos" element={<ElectronicsPage />} />
          </Route>
          <Route path="sobre-nos" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
