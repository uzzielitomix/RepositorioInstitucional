import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Detalles from "./pages/detalles/Detalles";
import Footer from "./pages/home/components/footer/Footer";
import Search from "./pages/home/components/search/Search";
import Registro from "./pages/registro/Registro";
import Pagination from "./pages/home/components/pagination/Pagination";
import Tarjeta from "./pages/home/components/Tarjeta/Tarjeta";
import Profile from "./pages/home/components/profile/Profile";
import Forgotpassword from "./pages/login/recuperarcontrasena/Forgotpassword";
export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login></Login>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/Registro" element={<Registro></Registro>} />
      <Route path="/Detalles/:id" element={<Detalles></Detalles>} />
      <Route path="/Perfil" element={<Profile></Profile>}/>
      <Route path="Recuperar" element={<Forgotpassword></Forgotpassword>}/>
    </Routes>
  </BrowserRouter>
  
  );
}
