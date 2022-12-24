import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">Repositorio Institucional</a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <a href="#!">Inicio</a>
              </li>
              <li>
                <a href="#!">Acerca de</a>
              </li>
              <li>
                <a href="#!">listar por</a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#!">Materia</a>
                  </li>
                  <li>
                    <a href="#!">Autor</a>
                  </li>
                  <li>
                    <a href="#!">Carrera</a>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={"/Perfil"}>
                  <p>Mi perfil</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
