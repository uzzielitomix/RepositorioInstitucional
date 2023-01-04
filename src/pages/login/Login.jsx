import { useEffect, useState } from "react";
import {URL_BASE} from "../../config/URL_BASE";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./itszlogo.png";
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emptyValidate = () => {
    if (email.trim() === '') {
      alert('el email no puede estar vacio');
      
    }
    if (password.trim() === '') {
      alert('El campo contraseña no puede estrar vacio');
    }
  };
  const onPressLogin = async (e) => {
    e.preventDefault();
    emptyValidate();
    const url = `${URL_BASE}/auth/login/`;
    var data = {
      email: email,
      password: password,
    };
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const respuesta = await response.json();
    console.log(respuesta);
    if (respuesta.email === email) {
      localStorage.setItem('token', respuesta.token)
      /* navigation.navigate('Home'); */
      window.location="/home"
    }else{
      alert(respuesta.email);
    }
    if (respuesta.detail) {
      alert(respuesta.detail);
    }
  };
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
        <h1 ><center>REPOSITORIO INSTITUCIONAL</center> </h1>
      </div>
      <br />
      <br />
      <br />
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="post">
            <label htmlFor="email">Correo electronico</label>
            <input
              type="email"
              placeholder="Correo"
              name="email"
              value={email}
              onChange={onChangeMail}
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onChangePassword}
            />

            <Link to={"/home"} onClick={onPressLogin}>
              <button>Ingresar</button>
            </Link>
            <p className="message">
              <a href="#">¿No tienes cuenta?</a>
             <Link to={"/registro"}>
            
                <a>Registrarse</a>
              </Link>
              <Link to={"/Recuperar"}>
                <p>Olvide mi contraseña</p>
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
            {/* <a className="text-white" href="#"></a> */}
          </div>
        </footer>
      </div>
    </>
  );
}
