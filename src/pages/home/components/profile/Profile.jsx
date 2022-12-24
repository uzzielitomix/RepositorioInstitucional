import { useState, useEffect } from "react";
import { URL_BASE } from "../../../../config/URL_BASE";

const Profile = () => {


  const [infoprofile, setInfoprofile] = useState({});
  const getInfoProfile = async () => {
    const url =`${URL_BASE}/auth/users/me/`
    let token = localStorage.getItem('token')
    const solicitud = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Token ${token}`,
        },
      })
    const respuesta = await solicitud.json()
    console.log(respuesta)
    setInfoprofile(respuesta)



  };
  useEffect(() =>{

    getInfoProfile();
  },[]);
  return (
    <>
      <h1>Informacion del perfil</h1>
      <hr />
      <h2>Nombre : {infoprofile.first_name}</h2>
      <h2>Apellido Paterno: {infoprofile.last_name}</h2>
      <h2>Apellido Materno: {infoprofile.apellido_materno}</h2>
      <h2>Matricula: {infoprofile.matricula}</h2>
      <h2>Correo: {infoprofile.email}</h2> 
      
 
    </>
  );
};

export default Profile;
