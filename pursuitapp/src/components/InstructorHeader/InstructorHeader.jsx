import "./InstructorHeader.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const InstructorHeader = ({ type }) => {
  
 
  const navigate = useNavigate();

  

  return (
    <div className="instrHeader">
      <div className="instrHeaderImage ">
        <img
            src="https://i.imgur.com/UeFpMQf.png"
            alt=""
            className="instructorImage"
        />
      </div>
      
    </div>
  );
};

export default InstructorHeader;