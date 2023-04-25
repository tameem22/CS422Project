import "./ExploreItem.css";
import { useNavigate } from "react-router-dom";

const ExploreItem = ({ title, imgSrc, location, description, instructorName, instructorRating, instructorImgSrc, price, rating}) => {
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
        src={imgSrc}
        alt=""
        className="itemImg"
        onClick={handleActivity}
      />
      <div className="itemDesc">
        <div className="itemDetails">
          <span className="itemTitle" onClick={handleActivity}>
            {title}</span>
          <span className="itemLocation">{location}</span>
        </div>
        <span className="itemSubtitle">
          {description}
        </span>
        <img
          src={rating}
          alt=""
          className="itemRating"
        />
      </div>
      <div className="instructorDetails">
        <div className="instructorWrapper">
          <div className="instructorRating">
            <span>{instructorName}</span>
            <button>{instructorRating} ✰</button>
          </div>
          <img
            src={instructorImgSrc}
            alt=""
            className="instructorImg"
            onClick={handleInstructor}
          />
        </div>
        <div className="itemDetailTexts">
          <span className="itemPrice">${price}</span>
          <span className="itemTaxText">Includes taxes and fees</span>
          <button className="itemCheckButton" onClick={handleActivity}>Check availability</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreItem;