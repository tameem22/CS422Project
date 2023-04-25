import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./Checkout.css";
import "./Checkout.css";

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

  const handleInstr = () => {
    navigate("/InstructorInfo", {});
  };
  return (
    <div>
      <Navbar />
      <div className="checkoutContainer">
        <div className="checkoutWrapper">
          <div className="info">
            <div className="tripTitle">
              <h1>User's Trip Title</h1>
              <b>Trip Location: Denver, Colorado</b>
              <b>Trip Activity: Skiing</b>
              <b>Total Group Size: 88888</b>
              <b>Trip Status: Planned/Purchased</b>
            </div>
            <div className="members">
              <h1>Group Members</h1>
              <div className="instrButtons">
              <button>John Doe<br/> <br/>Invite Status: Accepted</button>
              <button>John Doe<br/> <br/>Invite Status: Accepted</button>
              <button>John Doe<br/> <br/>Invite Status: Accepted</button>
              <button>+<br/> <br/>Invite More Members</button>
              </div>
            </div>
            <div className="availableIns">
              <h1>Available Instructors</h1>
              <div className="instrButtons">
              <button onClick={handleInstr}>John Instructor<br/> <br/><u>View Instructor Page</u></button>
              <button onClick={handleInstr}>John Instructor<br/> <br/><u>View Instructor Page</u></button>
              <button onClick={handleInstr}>John Instructor<br/> <br/><u>View Instructor Page</u></button>
              </div>
            </div>
            <div className="equipment">
              <h1>Equipment</h1>
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
            <h2>Total Trip Cost:</h2>
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
            <div className="costinfo">
              <b>Activity Charge x3: $900.00</b>
              <b>Lodging x3 Nights: $600.00</b>
              <b>Taxes & Fees: $80.00</b>
              <b>Total:   $1580.00</b>
              <br></br>
              <br></br>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout