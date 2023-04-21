import "./Navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/Explore", {});
  };

  const handleMyAccount = () => {
    navigate("/MyAccount", {});
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
          <button className="navButton" onClick={handleMyAccount}>
            My Account</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar