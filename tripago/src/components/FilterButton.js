export default function FilterButton({ text, filteree, sendDataUp, data }) {
  return (
    <button
      className="w-20 border-black border-2"
      onClick={() => {
        console.log(data);
        let newData = data.filter((eleme) => eleme.loc === filteree);
        sendDataUp(newData);
      }}
    >
      {text} Trips
    </button>
  );
}
