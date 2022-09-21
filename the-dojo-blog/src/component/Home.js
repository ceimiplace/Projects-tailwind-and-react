import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
import Loading from "./Loading";
export default function Home() {
  const [showBlogs, setShowBlogs] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  //Will make a fetch request that gets info names on every render of the user

  useEffect(() => {
    async function getData() {
      let responsePlaceholder = await fetch(
        "https://jsonplaceholder.typicode.com/comments/?_limit=15"
      );
      let dataPlaceholder = await responsePlaceholder.json();
      let newDataPlaceholder = dataPlaceholder.map((elem) => {
        return {
          body: elem.body,
          id: elem.id,
        };
      });

      let responseNames = await fetch("https://randomuser.me/api/?results=15");
      let dataNames = await responseNames.json();
      let newNames = dataNames.results.map((elem, index) => {
        const { title, first, last } = elem.name;
        const { large, medium, thumbnail } = elem.picture;
        return {
          title,
          first,
          last,
          large,
          medium,
          thumbnail,

          ...newDataPlaceholder[index],
        };
      });
      console.log(newNames);
      setShowLoading(false);
      setShowBlogs(newNames);
    }

    getData();
  }, []);

  return (
    <div>
      {showLoading && <Loading />}
      <Bloglist blogList={showBlogs} title={"All blogs"} />
    </div>
  );
}
