import HotelListItem from "./HotelListItem";
import HotelContext from "../context/HotelContext";
import { useContext } from "react";

function HotelListing() {
  const { hotelList } = useContext(HotelContext);

  return (
    <div className="hotel-list-container">
      {hotelList.length &&
        hotelList.map((hotelData, index) => {
          return (
            <HotelListItem key={index} hotelData={hotelData} index={index} />
          );
        })}
    </div>
  );
}

export default HotelListing;
