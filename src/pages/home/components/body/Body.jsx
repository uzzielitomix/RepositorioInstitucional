import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import "./Body.css";
import Tarjeta from "../Tarjeta/Tarjeta";

export default function Body() {
  const URL =
    "https://6308-187-146-55-44.ngrok.io/api/archivo/";
  const [data, setData] = useState([]);
  //URL: la URL de tu endpoint API
  function postData() {
    const response = fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //alert(JSON.stringify(responseJson));
        //console.log(typeof responseJson);
        setData(responseJson.results);
      })
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  useEffect(() => {
    postData();
  }, []);

  console.log(data);
  return (
    <>
      {data.map((element) => (
        <>
          <div className="grid-container">
            <div>
              <Tarjeta
                titulo={element.titulo}
                imagen={element.imagen}
                resumen={element.resumen}
              ></Tarjeta>
            </div>
          </div>
        </>
      ))}

      <Pagination></Pagination>
    </>
  );
}
