import "./Activities.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Destinations = () => {

  const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });

  const navigate = useNavigate();

  const handleItemClick = (activity) => {
    navigate("/Explore", { state: { destination, date, options, activity } });
  };

  return (
    <div className="activities">
      <div className="activities-item" onClick={() => handleItemClick("scubaDiving")}>
        <img
          src="https://i.imgur.com/L65Me0D.jpeg"
          alt=""
          className="activities-img"
        />
        <div className="activities-title">
          <h1>Scuba Diving</h1>
          <h2>23 locations</h2>
        </div>
      </div>
      
      <div className="activities-item" onClick={() => handleItemClick("hiking")}>
        <img
          src="https://i.imgur.com/Ou2j6Oq.jpeg"
          alt=""
          className="activities-img"
        />
        <div className="activities-title">
          <h1>Hiking</h1>
          <h2>42 locations</h2>
        </div>
      </div>
      <div className="activities-item" onClick={() => handleItemClick("hunting")}>
        <img
          src="https://i.imgur.com/RleGasv.jpeg"
          alt=""
          className="activities-img"
        />
        <div className="activities-title">
          <h1>Hunting</h1>
          <h2>17 locations</h2>
        </div>
      </div>
      <div className="activities-item" onClick={() => handleItemClick("fishing")}>
        <img
          src="https://i.imgur.com/lkAn6xv.png"
          alt=""
          className="activities-img"
        />
        <div className="activities-title">
          <h1>Fishing</h1>
          <h2>26 locations</h2>
        </div>
      </div>
    </div>
  );
};

export default Destinations;