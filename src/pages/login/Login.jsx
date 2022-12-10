import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./itszlogo.png";
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const data = {
    email: email,
    password: password,
  };
  function onPressLogin(e) {
    e.preventDefault();
    const url =
    "https://6308-187-146-55-44.ngrok.io/api/auth/login/"

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const onChangeMail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="nav">
        <br />
        <h1>Repositorio ITSZ</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="post">
            <input
              type="email"
              placeholder="correo"
              name="email"
              value={email}
              onChange={onChangeMail}
            />

            <input
              type="password"
              placeholder="contraseña"
              name="password"
              value={password}
              onChange={onChangePassword}
            />

            <Link to={"/home"} onClick={onPressLogin}>
              <button>Ingresar</button>
            </Link>
            <p className="message">
              <a>¿No tienes cuenta?</a>
             <Link to={"/registro"}>
            
                <a>Registrarse</a>
              </Link>

            </p>
          </form>
        </div>
      </div>
      <div className="footer">
        <footer className="text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/TecNMZongolica/"
                role="button"
              >
                <i className="fab fa-facebook-f">Facebook</i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram">Instagram</i>
              </a>
            </section>
          </div>

          <div className="text-center p-3">
            © 2022 Copyright:
            <a className="text-white" href="#"></a>
          </div>
        </footer>
      </div>
    </>
  );
}
