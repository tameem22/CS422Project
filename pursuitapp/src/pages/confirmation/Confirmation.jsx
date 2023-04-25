
import './Confirmation.css';
import Navbar from '../../components/Navbar/Navbar';

const Confirmation = ({ tripInfo }) => {
    
  

  return (
    <div className='confirmation-page'>
      <Navbar />
      <div className='confirmation-header'>
        <div className='confirmation-header-top'>
          <h2>Thank you for choosing Pursuit!</h2>
          <span className="order-confirmation">Order Confirmation #: XXX-XXX-XXX</span>
        </div>
        <div className='trip-info-container'>
          <div className='trip-info-left'>
            <p>Group Leader: John Doe</p>
            <p>Instructor: John Instructor</p>
            <p>Group Size: 3</p>
          </div>
          <div className='trip-info-right'>
            <p>Dates: 2/27/2023 - 3/1/2023</p>
            <p>Trip Location: Riviera Beach, FL</p>
            <p>Trip Activity: Scuba Diving</p>
            
          </div>
        </div>
      </div>



      <h2>Make sure you're prepared before your trip:</h2>
      <div className='preparation-links'>
        <a href='/Activity'>Learn the basics</a>
        <span>It is recommended that you review the provided information about the activity you have chosen prior to arriving. This information has been provided to you by your instructor and will help ease you into the experience so that you can have as successful a trip as possible.</span>
        <a href='/MyPlans'>Review Recommended Equipment</a>
        <span>Make sure you arrive prepared! Most of the equipment you will need for your activity will be provided to you after you arrive, however we recommend bringing additional items. These items are customized for each activity we provide and can be viewed on the "My Trips" page. </span>
        <a href='/InstructorInfo'>Meet Your Instructor</a>
        <span>Unsure about anything regarding your trip? Feel free to send your instructor a message to clear up and unanswered questions. They can help you through the planning process to ensure a smooth and eventful trip.</span>
      </div>
    </div>
  );
};

export default Confirmation;