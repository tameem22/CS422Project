import "./Activities.css";
import { useNavigate } from "react-router-dom";

const Destinations = () => {

  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate("/Explore", {});
  };

  return (
    <div className="activities">
      <div className="activities-item" onClick={handleItemClick} >
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
      
      <div className="activities-item" onClick={handleItemClick} >
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
      <div className="activities-item" onClick={handleItemClick} >
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
      <div className="activities-item" onClick={handleItemClick}>
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