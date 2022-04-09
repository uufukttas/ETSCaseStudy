import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelAddButton from "./components/HotelAddButton";
import OrderButton from "./components/OrderButton";
import HotelListing from "./components/HotelListing";
import Pagination from "./components/Pagination";
import AddHotel from "./components/AddHotel";
import { HotelProvider } from "./context/HotelContext";
import "./App.css";

function App() {
  return (
    <HotelProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="app-container">
                  <HotelAddButton />
                  <OrderButton />
                  <HotelListing />
                  <Pagination />
                </div>
              </>
            }
          ></Route>
          <Route exact path="/add-hotel" element={<AddHotel />}></Route>
        </Routes>
      </Router>
    </HotelProvider>
  );
}

export default App;
