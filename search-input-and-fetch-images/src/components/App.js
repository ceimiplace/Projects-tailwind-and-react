import SearchBar from "./SearchBar";
import ItemsList from "./ItemList";
import { useEffect, useState } from "react";
import Button from "./Button";
import Loader from "./Loader";

export default function UnsplashAPI({ changenavi }) {
  const [showLoader, setShowLoader] = useState(true);
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
  const [page, setPage] = useState(1);
  useEffect(() => {
    setShowLoader(true);
    setImages([]);
    fetch(`https://api.unsplash.com/search/photos?query=${term}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => {
        setImages(dates.results);
        setShowLoader(false);
      });
  }, [term, page]);

  return (
    <div className="grow px-4 flex flex-col  p-3 bg-rose-300 mx-auto min-h-screen">
      <header>
        <SearchBar submited={setTerm} initialTerm={term} />
      </header>
      <main className="grow">
        <div className="flex justify-center gap-4 my-4">
          <Button setPage={setPage} whichPageToSet={page - 1}>
            Previous page
          </Button>
          <Button setPage={setPage} whichPageToSet={page + 1}>
            Next Page
          </Button>
        </div>
        {showLoader && <Loader />}
        {images && <ItemsList images={images} />}
      </main>
      <div className="flex justify-center gap-4 my-4">
        <Button setPage={setPage} whichPageToSet={page - 1}>
          Previous page
        </Button>
        <Button setPage={setPage} whichPageToSet={page + 1}>
          Next Page
        </Button>
      </div>
    </div>
  );
}
