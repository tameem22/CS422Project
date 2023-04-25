import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import './Activity.css'
import mapImg from "../../assets/map.jpg";
import housesImg from "../../assets/houses.png";
import scubaImg1 from "../../assets/scuba1.jpg";
import scubaImg2 from "../../assets/scuba2.png";

const Activity = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/Checkout", {});
  };

  const handleInstructor = () => {
    navigate("/InstructorInfo", {});
  };

  const handleMyPlans = () => {
    navigate("/MyPlans", {});
  };


  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className = "container">
        <div className="activity-images">
          <img src={housesImg} className="housesImg"/>
          <img src={scubaImg1} className="scubaImg1"/>
          <img src={scubaImg2} className="scubaImg2"/>
        </div>
        <div className="activity-activityInfo">
          <h1>Scuba Diving</h1>
          <h3>Riviera Beach, FL</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pretium eget feugiat vitae, ultricies vitae urna. Donec viverra leo at laoreet commodo. Vivamus tempor ligula at fringilla auctor. Maecenas sit amet placerat orci, sed accumsan lorem.
        </div>
        <div className ="equipmentInfo">
          <h3>Provided Equipment</h3>
          <ul>
            <li>Provided Equipment #1</li>
            <li>Provided Equipment #2</li>
            <li>Provided Equipment #3</li>
            <li>Provided Equipment #4</li>
          </ul>
        </div>
        <div className="booking-buttons">
          <button class="bookButton" onClick={handleMyPlans}>Start New Plan</button>
          <button class="bookButton" onClick={handleCheckout}>Book Now</button>
        </div>
        <div className="activity-instrInfo">
          <h2>Available Instructors</h2>
          <span>(Instructor will be chosen when booking is finalized at checkout)</span>
          <div className="activity-instrButton">
            <button onClick={handleInstructor}>
              <div className="instructorWrapper">
                <div className="instructorRating">
                  <span>John I.</span>
                  <button>4.7 ✰</button>
                </div>
                <img
                  src="https://i.imgur.com/UeFpMQf.png"
                  alt=""
                  className="instructorImg"
                  onClick={handleInstructor}
                />
              </div><u>View Instructor Page</u></button>
              <button onClick={handleInstructor}>
              <div className="instructorWrapper">
                <div className="instructorRating">
                  <span>John I.</span>
                  <button>4.7 ✰</button>
                </div>
                <img
                  src="https://i.imgur.com/UeFpMQf.png"
                  alt=""
                  className="instructorImg"
                  onClick={handleInstructor}
                />
              </div><u>View Instructor Page</u></button>
          </div>
        </div>
        <div className="areas">
          <h3>Get to Know The Area:</h3>
          <div className="PoI">
            <ul>
              <li>Point of Interest #1</li>
              <li>Point of Interest #2</li>
            </ul>
            <ul>
              <li>Point of Interest #3</li>
              <li>Point of Interest #4</li>
            </ul>
          </div>
          <img src={mapImg} className="mapImg"/>
        </div>
      </div>
    </div>


  )
}

export default Activity