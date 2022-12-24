import { useEffect, useState } from "react";
import { URL_BASE } from "../../../config/URL_BASE";
const Forgotpassword = () => {
  const [email, setEmail] = useState("");

  const onChangeMail = (e) => {
    setEmail(e.target.value);
  };

  const recuperarContrasena = async () => {
    const url = `${URL_BASE}/auth/password/reset/`;

    const solicitud = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(email), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const respuesta = await solicitud.json();
    console.log(respuesta);
  };
  return (
    <>
      <form onSubmit={recuperarContrasena}>
        <label htmlFor="email">Ingrese su correo</label>
        <input type="email" value={email} onChange={onChangeMail} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
export default Forgotpassword;
