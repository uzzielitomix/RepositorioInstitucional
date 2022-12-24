import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { URL_BASE } from "../../config/URL_BASE";
import PDFViewer from "pdf-viewer-reactjs";
import "./Detalles.css";
export default function Detalles() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  const getLibro = async () => {
    let token = localStorage.getItem("token");
    const url = `${URL_BASE}/archivo/${id}`;
    const solicitud = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const respuesta = await solicitud.json();
    console.log(respuesta);
    setData(respuesta);
  };
  useEffect(() => {
    //use efect para que cuando se carge el componentete se ejecute la funcion posFata
    getLibro();
  }, []);
  return (
    <>
      <div className="book-detail">
        <div className="cover">
          <div className="img-wrapper">
            <img alt="tarjeta" src={data.imagen} />
          </div>
          <div className="author-wrapper">
            <img alt="tarjeta" src={data.imagen} />
            <span>{data.autor}</span>
          </div>
        </div>

        <div className="content">
          <h2>{data.titulo}</h2>
          <p>{data.resumen}</p>
          <button>
            <a href={data.pdf} target="_blank">Leer</a>
          </button>
        </div>
      </div>
      
    </>
  );
}
