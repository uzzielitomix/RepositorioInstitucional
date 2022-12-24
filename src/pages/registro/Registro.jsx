import { Link } from "react-router-dom";
import { useState } from "react";
import "./Registro.css";
import { URL_BASE } from "../../config/URL_BASE";
export default function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [matricula, setMatricula] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [status, setStatus] = useState("failed");

  const cleanInputs = () => {
    setEmail("");
    setPassword("");
    setFirst_name("");
    setLast_name("");
    setMatricula("");
    setApellido_materno("");
  };
  const onSignupPressed = async (e) => {
    e.preventDefault();

    const url = `${URL_BASE}/auth/signup/`;
    const data = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      matricula: matricula,
      apellido_materno: apellido_materno,
    };
    const solicitud = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await solicitud.json();
    console.log("Respuesta del backend", respuesta);
    console.log(respuesta.status);
    if (respuesta.status === "success") {
      setStatus("success");
      cleanInputs();
      alert("revisa tu correo");
      window.location = "/";
    } else {
      setStatus("failed");
      cleanInputs();
    }
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeFirstName = (e) => {
    setFirst_name(e.target.value);
  };
  const onChangeLastName = (e) => {
    setLast_name(e.target.value);
  };
  const onChangeApellidoMaterno = (e) => {
    setApellido_materno(e.target.value);
  };
  const onChangeMatricula = (e) => {
    setMatricula(e.target.value);
  };

  return (
    <>
      <body>
        <main className="sign-up">
          <div className="sign-up_container">
            <div className="sign-up_image"></div>
            <div className="sign-up__content">
              <header className="sign-up__header">
                <h1 className="sign-up__title">REGISTRO</h1>
                <h2>ITSZ</h2>
                <p className="sign-up__descr">
                  Bienvenido alumno, registra tu cuenta acontinuación.
                </p>
              </header>
              <form className="sign-up__form form" method="post">
                <div className="form__row form__row--two">
                  <div className="input form__inline-input">
                    <div className="input__container">
                      <input
                        className="input__field"
                        id="first-name"
                        placeholder="First Name"
                        required=""
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={onChangeFirstName}
                      />
                      <label className="input__label" htmlFor="first-name">
                        Nombre
                      </label>
                    </div>
                  </div>
                  <div className="input form__inline-input">
                    <div className="input__container">
                      <input
                        className="input__field"
                        id="last-name"
                        placeholder="Last Name"
                        required=""
                        type="text"
                        value={last_name}
                        onChange={onChangeLastName}
                      />
                      <label
                        className="input__label"
                        htmlFor="apellido-paterno"
                      >
                        Apellido Paterno
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="input">
                    <div className="input__container">
                      <input
                        className="input__field"
                        id="username"
                        placeholder="Username"
                        type="text"
                        value={apellido_materno}
                        onChange={onChangeApellidoMaterno}
                      />
                      <label className="input__label" htmlFor="username">
                        Apellido Materno
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="input">
                    <div className="input__container">
                      <input
                        className="input__field"
                        id="username"
                        placeholder="Username"
                        type="text"
                        value={matricula}
                        onChange={onChangeMatricula}
                      />
                      <label className="input__label" htmlFor="username">
                        Matricula
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="input">
                    <div className="input__container">
                      <input
                        className="input__field"
                        id="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={onChangeEmail}
                      />
                      <label className="input__label" htmlFor="email">
                        Correo
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="input">
                    <div className="input__container">
                      <input
                        className="input__field"
                        id="password"
                        placeholder="Password"
                        required=""
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                      />
                      <label className="input__label" htmlFor="password">
                        Contraseña
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form__row">
                  <div className="input-checkbox">
                    <div className="input-checkbox__container">
                      <input
                        checked=""
                        className="input-checkbox__field"
                        id="agree"
                        tabIndex="0"
                        type="checkbox"
                      />
                      <span className="input-checkbox__square"></span>
                      <label className="input-checkbox__label" htmlFor="agree">
                        Acepto los terminos y condiciones
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <p></p>
                  <div className="component component--primary form__button">
                    {/**<Link to={"/login"}>*/}
                    <button
                      className="btn btn--regular"
                      disabled=""
                      id="sign-up-button"
                      tabIndex="0"
                      type="submit"
                      onClick={onSignupPressed}
                    >
                      Registrar
                    </button>{" "}
                    {/**</Link>*/}
                  </div>
                </div>
                <div className="form__row sign-up__sign">
                  ¿Ya tienes una cuenta?
                  {/**<Link to={"/"}>*/}
                  <a>Iniciar session</a>
                  {/**</Link>*/}
                </div>
              </form>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
