import "./Destinations.css";
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

  // const handleItemClick = () => {
  //   navigate("/Explore", { state: { destination, date, options } });
  // };
  const handleItemClick = () => {
    navigate("/Location", { state: { destination, date, options } });
  };

  return (
    <div className="destinations">
      <div className="destinations-item" onClick={handleItemClick} >
        <img
          src="https://i.imgur.com/5oFY8zq.png"
          alt=""
          className="destinations-img"
        />
        <div className="destinations-title">
          <h1>Alaska</h1>
          <h2>11 activities</h2>
        </div>
      </div>
      
      <div className="destinations-item" onClick={handleItemClick} >
        <img
          src="https://i.imgur.com/uz8EwUh.png"
          alt=""
          className="destinations-img"
        />
        <div className="destinations-title">
          <h1>Colorado</h1>
          <h2>29 activities</h2>
        </div>
      </div>
      <div className="destinations-item" onClick={handleItemClick} >
        <img
          src="https://i.imgur.com/CfXWfR4.png"
          alt=""
          className="destinations-img"
        />
        <div className="destinations-title">
          <h1>Washington</h1>
          <h2>7 activities</h2>
        </div>
      </div>
      <div className="destinations-item" onClick={handleItemClick} >
        <img
          src="https://i.imgur.com/zUXUPxg.png"
          alt=""
          className="destinations-img"
        />
        <div className="destinations-title">
          <h1>Florida</h1>
          <h2>18 activities</h2>
        </div>
      </div>
    </div>
  );
};

export default Destinations;