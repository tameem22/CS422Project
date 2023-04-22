import Navbar from "../../components/Navbar/Navbar"
import InstructorHeader from "../../components/InstructorHeader/InstructorHeader"
import { useNavigate } from "react-router-dom";
import "./InstructorInfo.css"


const InstructorInfo = () => {

  const navigate = useNavigate();

  const handleActivity = () => {
    navigate("/Activity", {});
  };


  return ( 
    <div >
      <div className="back-img">
        <Navbar />
        <InstructorHeader />
      </div>
      <div className="info-container">
        <div className="instrButtons">
          <div className="smButtons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://i.imgur.com/5SPUA2X.png"
                alt=""
                className="smImg"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://i.imgur.com/EJEtOW4.png"
                alt=""
                className="smImg"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://i.imgur.com/KENEcCP.png"
                alt=""
                className="smImg"
              />
            </a>
          </div>
          <div className="instrInfo">
            <h1>John I.</h1>
            <span><small>Member Since: 2019</small></span>
            <button>4.7 ✰</button>
          </div>
          <div className="bookButtons">
            <button onClick={() => window.location = 'mailto:john.i@pursuitoutside.com'}>Contact</button>
            <button onClick={handleActivity}>View Activities</button>
          </div>
        </div>
        <div className="instrBio">
          <h1>About Me</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pretium eget feugiat vitae, ultricies vitae urna. Donec viverra leo at laoreet commodo. Vivamus tempor ligula at fringilla auctor. Maecenas sit amet placerat orci, sed accumsan lorem.</span>
          <h1>Experience</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo nibh, pretium eget feugiat vitae, ultricies vitae urna. Donec viverra leo at laoreet commodo. Vivamus tempor ligula at fringilla auctor. Maecenas sit amet placerat orci, sed accumsan lorem.</span>
          <h1>Reviews</h1>
          <div className="reviews">
            <div className="reviewContent">
              <img
                src="https://i.imgur.com/0aO7Hoq.png"
                alt=""
                className="instrRatingImg"
              />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            </div>
            <div className="reviewContent">
              <img
                src="https://i.imgur.com/0aO7Hoq.png"
                alt=""
                className="instrRatingImg"
              />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default InstructorInfo