import { useParams } from "react-router-dom";
export default function FullBlogDetails() {
  const { id } = useParams();
  return <div>FWelcome to the family son {id}</div>;
}
