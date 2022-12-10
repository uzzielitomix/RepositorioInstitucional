import "./Tarjeta.css";
export default function Tarjeta({ titulo, resumen, imagen }) {
  return (
    <>
    <div class="card">
  <img src={imagen} alt="Avatar"/>
  <div class="container">
    <h4><b>{titulo}</b></h4> 
    <p>{resumen}</p> 
  </div>
</div>
    </>
  );
}
