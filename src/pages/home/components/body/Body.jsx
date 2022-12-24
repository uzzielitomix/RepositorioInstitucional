import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import Tarjeta from "../Tarjeta/Tarjeta";
import { URL_BASE } from "../../../../config/URL_BASE";

export default function Body() {
  const [data, setData] = useState([]);
  const getLibros = async () => {
    let token = localStorage.getItem("token");
    const URL = `${URL_BASE}/archivo/`;
    const solicitud = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const respuesta = await solicitud.json();
    console.log(respuesta);
    setData(respuesta.results);
  };
  useEffect(() => {
    //use efect para que cuando se carge el componentete se ejecute la funcion posFata
    getLibros();
  }, []);
  console.log(data);
  return (
    <>
      {data.map((element) => (
        <>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="row-2">
                  <Tarjeta
                    id={element.id}
                    titulo={element.titulo}
                    imagen={element.imagen}
                    resumen={element.resumen}
                  ></Tarjeta>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

      <Pagination></Pagination>
    </>
  );
}
