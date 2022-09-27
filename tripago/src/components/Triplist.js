export default function Triplist() {
  fetch("http://localhost:3000/trips")
    .then((resp) => resp.json())
    .then((data) => console.log(data));
  return <div>Hy World</div>;
}
