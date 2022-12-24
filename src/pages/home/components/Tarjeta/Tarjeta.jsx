import "./Tarjeta.css";
import { Link } from "react-router-dom";
export default function Tarjeta({ titulo, resumen, imagen,id}) {
  return (
    <>
      <div className="cards">
        <div className="card-wrapper">
          <div className="card">
            <img alt="" src={imagen} />
            <div className="content">
              <h5 className="title">{titulo}</h5>
              <p className="text">
                {resumen}
              </p>
              <Link to={`/Detalles/${id}`}>
                <button>Detalles</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
