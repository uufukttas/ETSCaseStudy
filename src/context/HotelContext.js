import { createContext, useState, useEffect } from "react";

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    getHotelList();
  }, [hotelList]);

  const getHotelList = () => {
    const hotelList = JSON.parse(
      window.localStorage.getItem("hotel-information") || "[]"
    );

    setHotelList(hotelList);
  };

  const addHotel = async (newHotel) => {
    hotelList.push(newHotel);

    updateStorage();
  };

  const editHotel = (isDecreased, selectedHotel) => {
    const hotelName = selectedHotel[0].textContent.toLowerCase();
    let hotelPoint = Number(selectedHotel[1].textContent);

    if (isDecreased) {
      hotelPoint--;
    } else {
      hotelPoint++;
    }

    hotelList.forEach(hotel => {
      if (hotel.name.toLowerCase() === hotelName) {
        hotel.point = hotelPoint;
      }
    });

    setHotelList(hotelList);
    updateStorage();
  };

  const updateStorage = () => {
    window.localStorage.setItem("hotel-information", JSON.stringify(hotelList));
  };

  const deleteHotel = async (id) => {
    // if (window.confirm("Are you sure you want to delete this item?")) {
    //   await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
    //   setHotelList(hotelList.filter((item) => item.id !== id));
    // }
  };

  return (
    <HotelContext.Provider
      value={{
        hotelList,
        getHotelList,
        deleteHotel,
        addHotel,
        editHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContext;
