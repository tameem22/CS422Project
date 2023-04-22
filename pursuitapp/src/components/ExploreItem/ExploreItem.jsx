import "./ExploreItem.css";
import { useNavigate } from "react-router-dom";

const ExploreItem = () => {

  const navigate = useNavigate();

  const handleActivity = () => {
    navigate("/Activity", {});
  };

  const handleInstructor = () => {
    navigate("/InstructorInfo", {});
  };

  return (
    <div className="exploreItem">
      <img
        src="https://i.imgur.com/iOg7n5W.png"
        alt=""
        className="itemImg"
        onClick={handleActivity}
      />
      <div className="itemDesc">
        <div className="itemDetails">
          <span className="itemTitle" onClick={handleActivity}>
            Deep Sea Diving</span>
          <span className="itemLocation">Sydney, Australia</span>
        </div>
        <span className="itemSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna.
        </span>
        <img
        src="https://i.imgur.com/0aO7Hoq.png"
        alt=""
        className="itemRating"
      />
      </div>
      <div className="instructorDetails">
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
        </div>
        <div className="itemDetailTexts">
          <span className="itemPrice">$189</span>
          <span className="itemTaxText">Includes taxes and fees</span>
          <button className="itemCheckButton" onClick={handleActivity}>Check availability</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreItem;