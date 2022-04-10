import { useContext } from "react";
import HotelContext from "../context/HotelContext";

function OrderButton() {
  const { hotelList, setHotelList, getHotelList } = useContext(HotelContext);

  const handleChange = (event) => {
    const isDecreasedOption =
      event.target.value.toLowerCase().indexOf("azalan") > -1;

      sortHotels(isDecreasedOption);
  };

  const sortHotels = (isDecreased) => {
    hotelList.sort((a, b) => a.point - b.point);

    if (isDecreased) {
      setHotelList(hotelList);
    } else {
      setHotelList(hotelList.reverse());
    }

    getHotelList();
  };

  return (
    <div className="order-button-container">
      <select onChange={handleChange}>
        <option>Sıralama</option>
        <option>Puan (Artan)</option>
        <option>Puan (Azalan)</option>
      </select>
    </div>
  );
}

export default OrderButton;
