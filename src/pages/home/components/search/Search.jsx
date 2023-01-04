import "./Search.css";
import { useState } from "react";
import { URL_BASE } from "../../../../config/URL_BASE";
export default function Search() {
  const [value, setValue] = useState("");
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${URL_BASE}/archivo/?titulo=${value}`;
    const request = await fetch(url, {
      method: "get",
    });
    const response = await request.json();
    console.log(response);
  };
  return (
    <>
      <h1>Busqueda por titulo</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input value={value} name="value" onChange={onChangeValue} />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}
