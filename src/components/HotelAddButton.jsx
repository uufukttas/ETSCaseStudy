import { Link } from "react-router-dom";

function HotelAddButton() {
  return (
    <div className="add-button-container">
      <Link to="/add-hotel">
        <button className="add-button">+</button>
      </Link>
      <h3>OTEL EKLE</h3>
    </div>
  );
}

export default HotelAddButton;
