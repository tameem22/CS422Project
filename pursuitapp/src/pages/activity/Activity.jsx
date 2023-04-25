import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import './Activity.css'

const Activity = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/Checkout", {});
  };


  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className = "container">
        <div className="activityInfo">
          <h1>Scuba Diving</h1>
          <h2>Riviera Beach, FL</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pretium eget feugiat vitae, ultricies vitae urna. Donec viverra leo at laoreet commodo. Vivamus tempor ligula at fringilla auctor. Maecenas sit amet placerat orci, sed accumsan lorem.
        </div>
        <div className ="equipmentInfo">
          <h3>Provided Equipment</h3>
          <ul>
            <li>Provided Equipment #1</li>
            <li>Provided Equipment #2</li>
            <li>Provided Equipment #3</li>
          </ul>
        </div>
        <button class="bookButton" onClick={handleCheckout}>Book Now</button>
        <div className="instrInfo">
          <h3>Available Instructors</h3>
        </div>
      </div>
    </div>


  )
}

export default Activity