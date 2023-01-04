import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Registro from "../pages/registro/Registro";
import Detalles from "../pages/detalles/Detalles";
import Profile from "../pages/home/components/profile/Profile";
import Forgotpassword from "../pages/login/recuperarcontrasena/Forgotpassword";
const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/Registro" element={<Registro></Registro>} />
          <Route path="/Detalles/:id" element={<Detalles></Detalles>} />
          <Route path="/Perfil" element={<Profile></Profile>} />
          <Route path="/recuperar" element={<Forgotpassword></Forgotpassword>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigation;
