import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Detalles from "./pages/detalles/Detalles";
import Footer from "./pages/home/components/footer/Footer";
import Search from "./pages/home/components/search/Search";
import Registro from "./pages/registro/Registro";
import Pagination from "./pages/home/components/pagination/Pagination";
import Tarjeta from "./pages/home/components/Tarjeta/Tarjeta";
export default function App() {
  return (
    <Home></Home>
  );
}
