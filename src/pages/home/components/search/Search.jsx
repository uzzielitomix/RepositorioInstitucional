import "./Search.css";

export default function Search() {
  return (
    <>
      <div className="search">
        <br />
        <br />
        <form action="/" method="post">
          <input type="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}
