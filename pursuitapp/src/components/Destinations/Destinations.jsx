import "./Destinations.css";
import { useNavigate } from "react-router-dom";

const Destinations = () => {

  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate("/Explore", {});
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