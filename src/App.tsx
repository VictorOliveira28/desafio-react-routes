import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./routes/MainPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
