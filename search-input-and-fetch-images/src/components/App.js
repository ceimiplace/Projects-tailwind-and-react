import SearchBar from "./SearchBar";
import ItemsList from "./ItemList";
import { useEffect, useState } from "react";
import Button from "./Button";
import Loader from "./Loader";

export default function UnsplashAPI({ changenavi }) {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => {
        console.log(dates);
        setImages(dates.results);
      });
  }, [term, page]);
  console.log(page);
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => setImages(dates.results));
  }, [term]);
  return (
    <div className="grow w-4/6 flex flex-col  p-3 bg-rose-200 mx-auto min-h-screen">
      <header>
        <SearchBar submited={setTerm} initialTerm={term} />
      </header>
      <main className="grow">
        {images ? <ItemsList images={images} /> : <Loader />}
      </main>
      <div className="flex justify-center gap-4 mt-4">
        <Button setPage={setPage} whichPageToSet={page - 1}>
          Previous page{" "}
        </Button>
        <Button setPage={setPage} whichPageToSet={page + 1}>
          Next Page
        </Button>
      </div>
    </div>
  );
}
