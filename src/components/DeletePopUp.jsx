import { useContext } from "react";
import HotelContext from "../context/HotelContext";

function DeletePopUp() {
  const { isVisiblePopUp, setIsVisiblePopUp } = useContext(HotelContext);

  const handlePopupClick = () => {
    setIsVisiblePopUp(!isVisiblePopUp);
  }

  return isVisiblePopUp ? (
    <div className="overlay-container flex justify-center items-center bg-opacity-50 bg-gray-500  w-full h-screen absolute top-0 left-0 z-10">
      <div className="rounded-2xl delete-popup-container relative z-20 flex flex-col bg-white w-3/5 h-2/5 justify-center items-center">
        <h1>Oteli Sil</h1>
        <p>Oteli silmek istediginizden emin misiniz?</p>
        <div className="option-wrapper flex flex-row w-full justify-around">
          <input
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            type="button"
            value="Oteli Sil"
          />
          <input
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded border-2 border-blue-500"
            type="button"
            value="Vazgec"
          />
        </div>
        <div className="hotel-delete-button rounded-lg bg-white absolute text-center w-5 h-5 inset-y-0 right-0 cursor-pointer" onClick={handlePopupClick}>
        <span>X</span>
      </div>
      </div>
    </div>
  ) : null;
}

export default DeletePopUp;
