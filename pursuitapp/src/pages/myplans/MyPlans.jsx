import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./MyPlans.css";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const MyPlans = () => {
  const navigate = useNavigate();
  const newMemberNameRef = useRef(null);
  const newMemberEmailRef = useRef(null);
  const [openDate, setOpenDate] = useState(false);
  const [openInvitePopup, setOpenInvitePopup] = useState(false);
  const [groupMembers, setGroupMembers] = useState([
    { name: "John Doe", status: "Accepted" },
    { name: "Jane Doe", status: "Accepted" },
    { name: "Jack Doe", status: "Declined" },
  ]);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  
  const handleCheckout = () => {
    navigate("/Checkout", {});
  };

  const handleInstructor = () => {
    navigate("/InstructorInfo", {});
  };

  const inviteNewMember = (name) => {
    setOpenInvitePopup(false);
    setGroupMembers([...groupMembers, { name, status: "Pending" }]);
  };

  const handleInviteMemberClick = () => {
    setOpenInvitePopup(true);
  };

  const handleCloseInvitePopup = () => {
    setOpenInvitePopup(false);
  };

 

  return (
    <div>
      <Navbar />
      <Dialog open={openInvitePopup} onClose={handleCloseInvitePopup}>
        <DialogTitle>Invite New Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            inputRef={newMemberNameRef}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            inputRef={newMemberEmailRef} // add a reference for the email input
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInvitePopup} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => inviteNewMember(newMemberNameRef.current.value)}
            color="primary"
          >
            Invite
          </Button>
        </DialogActions>
      </Dialog>
      <div className="checkoutContainer">
       <div className="checkoutWrapper">
        
         <div className="trip-info">
         <DropdownMenu />
           <div className="tripTitle">
             <b>Trip Location: Denver, Colorado</b>
             <b>Trip Activity: Skiing</b>
             <b>Total Group Size: 3</b>
             <b>Trip Status: Planned</b>
           </div>
           <div className="members">
             <h1>Group Members</h1>
             <div className="myplans-gmember-container">
            {groupMembers.map((member, index) => (
              <button key={index}>
                {member.name}
                <br /> <br />
                Invite Status: {member.status}
              </button>
            ))}
            <button onClick={handleInviteMemberClick}>
              +
              <br /> <br />
              Invite More Members
            </button>
          </div>
           </div>
           <div className="availableIns">
             <h1>Available Instructors</h1>
             <div className="myplans-instructor-container">
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
                 </div><u className="instr-page-link">View Instructor Page</u></button>
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
                 </div><u className="instr-page-link">View Instructor Page</u></button>
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
                 </div><u className="instr-page-link">View Instructor Page</u></button>
             </div>

           </div>
           <div className="equipment">
             <h1>Preparation</h1>
             <h4>Provided Equipment:</h4>
             <ul>
               <li>Provided Equipment #1</li>
               <li>Provided Equipment #2</li>
               <li>Provided Equipment #3</li>
               <li>Provided Equipment #4</li>
               <li>Provided Equipment #5</li>
               <li>Provided Equipment #6</li>
             </ul>
             <h4>Required Equipment:</h4>
             <ul>
               <li>
                 <input type="checkbox" />
                 <label>Equipment #1</label>
               </li>
               <li>
                 <input type="checkbox" />
                 <label>Equipment #2</label>
               </li>
               <li>
                 <input type="checkbox" />
                 <label>Equipment #3</label>
               </li>
               <li>
                 <input type="checkbox" />
                 <label>Equipment #4</label>
               </li>
               <li>
                 <input type="checkbox" />
                 <label>Equipment #5</label>
               </li>
               <li>
                 <input type="checkbox" />
                 <label>Equipment #6</label>
               </li>
             </ul>
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
             <button className="bookButton-white" onClick={handleCheckout}>Go to Checkout</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}


export default MyPlans