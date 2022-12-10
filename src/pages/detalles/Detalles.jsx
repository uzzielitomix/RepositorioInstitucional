import "./Detalles.css";
export default function Detalles() {
  return (
    <>
      <div class="book-detail">
        <div class="cover">
          <div class="img-wrapper">
            <img
              src={
                "https://img.sj33.cn/uploads/allimg/201109/20110905152335206.jpg"
              }
            />
          </div>
          <div class="author-wrapper">
            <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.VgEAgFHiP28OoY6aR5jfDgAAAA?pid=ImgDet&rs=1" />
            <span>Oscar Wilde</span>
          </div>
        </div>

        <div class="content">
          <h2>BREEDING BIO INSECURITY</h2>
          <p>
            The Picture of Dorian Gray is a philosophical novel by the writer
            Oscar Wilde, first published complete in the July 1890 issue of
            Lippincott's Monthly Magazine. The magazine's editor feared the
            story was indecent, and without Wilde's knowledge, deleted roughly
            five hundred words before publication. Despite that censorship, The
            Picture of Dorian Gray offended ...
          </p>
          <button>leer</button>
        </div>
      </div>
    </>
  );
}
