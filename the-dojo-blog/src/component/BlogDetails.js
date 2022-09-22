import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog details-{id}</h2>
    </div>
  );
}
