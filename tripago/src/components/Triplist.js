export default function Triplist({ lists }) {
  return (
    lists && (
      <div className=" my-2">
        <h2 className="text-3xl font-medium">Trip list</h2>
        <ul className=" ">
          {lists.map((elem) => {
            return (
              <li key={elem.id} className="my-6 shadow-md p-6">
                <h2 className="text-2xl font-medium my-2">{elem.title}</h2>
                <p className="text-2xl">{elem.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
