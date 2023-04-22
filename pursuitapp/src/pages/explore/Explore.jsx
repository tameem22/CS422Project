import "./Explore.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import ExploreItem from "../../components/ExploreItem/ExploreItem";


const Explore = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <div className="exploreContainer">
        <div className="exploreWrapper">
          <div className="filterContainer">
            <h1 className="filterTitle">Search for your next adventure</h1>
            <div className="filterItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="filterItem">
              <label>Check-in Date</label>
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
            <div className="filterItem">
              <label>Activity</label>
              <label>
                <input type="checkbox" />
                  Scuba Diving
              </label>
              <label>
                <input type="checkbox" />
                  Hiking
              </label>
              <label>
                <input type="checkbox" />
                  Hunting
              </label>
              <label>
                <input type="checkbox" />
                  Fishing
              </label>
              <label>
                <input type="checkbox" />
                  Other
              </label>
            </div>
            
            <div className="filterItem">
              <label>Options</label>
              <div className="filterOptions">
                <div className="filterOptionItem">
                  <span className="filterOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="filterOptionInput" />
                </div>
                <div className="filterOptionItem">
                  <span className="filterOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="filterOptionInput" />
                </div>
                <div className="filterOptionItem">
                  <span className="filterOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="filterOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="filterOptionItem">
                  <span className="filterOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="filterOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="filterOptionItem">
                  <span className="filterOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="filterOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="exploreResult">
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;