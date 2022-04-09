import { useState, useContext } from "react";
import HotelContext from "../context/HotelContext";

function AddHotel() {
  const [text, setText] = useState("");
  const { addHotel } = useContext(HotelContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newHotel = {
      name: text,
      point: 0,
    };

    addHotel(newHotel);
    setText("");

    setTimeout(() => {
      document.getElementById('submit').value = 'EKLENDI';
      document.getElementById('submit').classList.remove('bg-blue-500', 'hover:bg-blue-700');
      document.getElementById('submit').classList.add('bg-green-700');
    }, 200);

  };

  return (
    <div className="w-1/2 add-hotel-container mt-5 ml-5 flex flex-col">
      <h3 className="add-hotel-header">OTEL ADI</h3>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <input
          id="submit"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
          value="EKLE"
        />
      </form>
    </div>
  );
}

export default AddHotel;
