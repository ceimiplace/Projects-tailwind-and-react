import { useParams } from "react-router-dom";
export default function FullBlogDetails() {
  const { id } = useParams();
  return <div>Full Blog Details={id}</div>;
}
