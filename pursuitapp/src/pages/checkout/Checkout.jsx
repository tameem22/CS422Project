

import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./Checkout.css";

const PersonalDetails = ({ onChange }) => (
  <div>
    <h3>Personal Details</h3>
    <div className="checkoutInputContainer">
      <input className="checkoutInput" type="text" name="firstName" placeholder="First Name" onChange={onChange} />
      <input className="checkoutInput" type="text" name="lastName" placeholder="Last Name" onChange={onChange} />
    </div>
    <input className="checkoutInput" type="email" name="email" placeholder="Email" onChange={onChange} />
    <input className="checkoutInput" type="tel" name="phone" placeholder="Phone Number" onChange={onChange} />
  </div>
);

const BillingDetails = ({ onChange }) => (
  <div>
    <h3>Billing Address</h3>
    <input className="checkoutInput" type="text" name="address" placeholder="Address" onChange={onChange} />
    <div className="checkoutInputContainer">
      <input className="checkoutInput" type="text" name="city" placeholder="City" onChange={onChange} />
      <input className="checkoutInput" type="text" name="state" placeholder="State" onChange={onChange} />
      <input className="checkoutInput" type="text" name="zipcode" placeholder="Zip Code" onChange={onChange} />
    </div>
  </div>
);

const PaymentDetails = ({ onChange }) => (
  <div>
    <h3>Payment Details</h3>
    <input className="checkoutInput" type="text" name="cardNumber" placeholder="Card Number" onChange={onChange} />
    <div className="checkoutInputContainer">
      <input className="checkoutInput" type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" onChange={onChange} />
      <input className="checkoutInput" type="text" name="cvv" placeholder="CVV" onChange={onChange} />
    </div>
  </div>
);




const Checkout = () => {
 const navigate = useNavigate();
 const [openDate, setOpenDate] = useState(false);
 const [date, setDate] = useState([
   {
     startDate: new Date(),
     endDate: new Date(),
     key: 'selection',
   }
 ]);

 const [selectedInstructor, setSelectedInstructor] = useState(null);

 const handleInstructorSelection = (index) => {
   setSelectedInstructor(index);
 };

 const handleConfirmation = () => {
  navigate("/Confirmation", {});
};

 const handleInstructor = () => {
   navigate("/InstructorInfo", {});
 };

 const [formData, setFormData] = useState({});

 const handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Process the formData, e.g., validate and send to an API.
  console.log(formData);
};

  return (
    <div>
      <Navbar />
      <div className="checkoutContainer">
        <div className="checkoutWrapper">
          <div className="trip-info">
            <div className="tripTitle">
              <h1>User's Trip Title</h1>
              <b>Trip Location: Denver, Colorado</b>
              <b>Trip Activity: Skiing</b>
              <b>Total Group Size: 3</b>
              <b>Trip Status: Planned</b>
            </div>

            <div className="availableIns">
              <h2>Confirm Your Instructor</h2>
              <div className="checkout-instructor-container">
                <button >
                  <div className="instructorWrapper">
                    <div className="instructorRating">
                      <span>John I.</span>
                      <button>4.7 ✰</button>
                    </div>
                    <img
                      src="https://i.imgur.com/UeFpMQf.png"
                      alt=""
                      className="checkout-instructorImg"
                    />
                  </div><u className='instr-page-link' onClick={handleInstructor}>View Instructor Page</u>
                </button>
                <button >
                  <div className="instructorWrapper">
                    <div className="instructorRating">
                      <span>John I.</span>
                      <button>4.7 ✰</button>
                    </div>
                    <img
                      src="https://i.imgur.com/UeFpMQf.png"
                      alt=""
                      className="checkout-instructorImg"
                    />
                  </div ><u className='instr-page-link' onClick={handleInstructor}>View Instructor Page</u>
                </button>
              </div>
            </div>
            <div>
              <h2>Checkout</h2>
              <form onSubmit={handleSubmit}>
                <PersonalDetails onChange={handleChange} />
                <PaymentDetails onChange={handleChange} />
                <BillingDetails onChange={handleChange} />
              </form>
           </div>
         </div>
         <div className="costBox">
           <h2 className="costHeader">Total Trip Cost:</h2>
           <div className="filterItem">
             <span onClick={() => setOpenDate(!openDate)}>{`${format(
               date[0].startDate,
               "MM/dd/yyyy"
             )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
             {openDate && (
               <DateRange
               onChange={(item) => setDate([item.selection])}
               minDate={new Date()}
               ranges={date}
               />
             )}
           </div>
           <div className="costInfo">
            <div className="costDetail">
              <span>Activity Charge x3:</span>
              <span>$900.00</span>
            </div>
            <div className="costDetail">
              <span>Lodging x3 Nights:</span>
              <span>$600.00</span>
            </div>
            <div className="costDetail">
              <span>Taxes & Fees:</span>
              <span>$80.00</span>
            </div>
            <div className="costDetail">
              <span>Total:</span>
              <span>$1580.00</span>
            </div>
             <button className="bookButton-white" onClick={handleConfirmation}>Book Now</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
};


export default Checkout