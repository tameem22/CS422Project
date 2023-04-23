import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();

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


  const handleExplore = () => {
    navigate("/Explore", { state: { destination, date, options } });
  };

  const handleMyPlans = () => {
    navigate("/MyPlans", {});
  };

  const handleHome = () => {
    navigate("/", {});
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <button className="logo" onClick={handleHome}>
          Pursuit</button>
        <div className="navItems">
          <button className="navButton" onClick={handleExplore}>
            Explore</button>
          <button className="navButton" onClick={handleMyPlans}>
            My Plans</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar