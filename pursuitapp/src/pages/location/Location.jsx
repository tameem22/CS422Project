import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import './Location.css';
import ExploreItem from "../../components/ExploreItem/ExploreItem";

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
        <ExploreItem
          title="Deep Sea Diving"
          imgSrc="https://i.imgur.com/iOg7n5W.png"
          location="Sydney, Australia"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna."
          instructorName="John I."
          instructorRating="4.7"
          instructorImgSrc="https://i.imgur.com/UeFpMQf.png"
          price="219"
        />
        <ExploreItem
          title="Cronulla Fishing Charters"
          imgSrc="https://i.imgur.com/TzrUgjY.png"
          location="Sydney, Australia"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque non sem faucibus malesuada. Pellentesque in facilisis enim. Ut viverra vulputate urna."
          instructorName="Jeff I."
          instructorRating="4.9"
          instructorImgSrc="https://i.imgur.com/TYYyNXn.png"
          price="179"
        />
      </div>
    </div>
  )
}
export default Location
