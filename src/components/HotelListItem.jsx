import { useContext, useEffect } from "react";
import HotelImage from "./assets/hotel.jpg";
import HotelContext from "../context/HotelContext";
import DeletePopUp from "./DeletePopUp";

function HotelListItem({ hotelData, index }) {
  const { hotelList, editHotel, isVisiblePopUp, setIsVisiblePopUp } = useContext(HotelContext);

  const handleClick = (event) => {
    const isDecreased =
      event.target.textContent.toLowerCase().indexOf("azalt") > -1;
    const selectedHotelInfo =
      event.target.parentNode.parentNode.childNodes[0].childNodes;

    editHotel(isDecreased, selectedHotelInfo);
  };

  const handleMouseEnter = (event) => {
    event.target.parentElement.children[2].classList.remove('hidden');
  };

  const handleMouseLeave = (event) => {
    (((((event || {}).target || {}).parentNode || {}).childNodes[2] || {}).classList || []).add("hidden");
  };

  const handlePopupClick = () => {
    setIsVisiblePopUp(!isVisiblePopUp);
  }

  return (
    <div
      className="hotel-information max-w-sm w-full lg:max-w-full lg:flex mb-2 mt-2 shadow-2xl relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <img
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={HotelImage}
          alt={`hotel-${index}`}
        />
      </div>
      <div className="border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            <h1>{hotelData.name}</h1>
          </div>
          <p className="text-gray-700 text-base">{hotelData.point}</p>
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleClick}
          >
            Puani Arttir
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Puani Azalt
          </button>
        </div>
      </div>
      <div className="hotel-delete-button hidden rounded-lg bg-white absolute text-center w-5 h-5 inset-y-0 right-0 cursor-pointer" onClick={handlePopupClick}>
        <span>X</span>
      </div>
    </div>
  );
}

export default HotelListItem;
