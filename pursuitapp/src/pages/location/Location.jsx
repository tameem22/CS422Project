import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import './Location.css'

const Location = () => {
  const navigate = useNavigate();

  const handleActivity = () => {
    navigate("/Activity", {});
  };
  return (
    <div>
      <Navbar />
      <div className='headerContainer'>
        <img src="https://imgur.com/vd0zsD3.png" alt=""  className='headerImg'/>
      </div>
      <div className='wordContainer'>
        <h1>Sydney, Australia</h1>
        <p className='mockDescription'>        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna.
        </p>
        <h2>Activities</h2>
        <div className="exploreItem">
          <img src="https://i.imgur.com/iOg7n5W.png" alt="" className="itemImg" onClick={handleActivity}/>
          <div className="itemDesc">
            <div className="itemDetails">
              <span className="destPlace" onClick={handleActivity}>Deep Sea Diving</span>
              <span className="destLocate">Sydney, Australia</span>
            </div>
            <span className="destDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna.
            </span>
          </div>
        </div>
        <div className="exploreItem">
          <img src="https://imgur.com/CNgkK2P.png" alt="" className="itemImg" onClick={handleActivity}/>
          <div className="itemDesc">
            <div className="itemDetails">
              <span className="destPlace" onClick={handleActivity}>Jet Skiing</span>
              <span className="destLocate">Sydney, Australia</span>
            </div>
            <span className="destDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Location
