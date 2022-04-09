import HotelListItem from "./HotelListItem";
import HotelContext from "../context/HotelContext";
import { useContext, useEffect } from "react";

function HotelListing() {
  const { hotelList, getHotelList } = useContext(HotelContext);

  useEffect(() => {
    getHotelList();
  }, [hotelList]);

  return (
    <div className="hotel-list-container">
      {hotelList.length &&
        hotelList.reverse().map((hotelData, index) => {
          return (
            <HotelListItem key={index} hotelData={hotelData} index={index} />
          );
        })}
    </div>
  );
}

export default HotelListing;
