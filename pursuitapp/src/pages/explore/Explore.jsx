import "./Explore.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import ExploreItem from "../../components/ExploreItem/ExploreItem";
import pursuitsData from "../../assets/pursuitsData";


const Explore = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [filteredPursuits, setFilteredPursuits] = useState([]); 
  const activity = location.state.activity;

  const resetActivities = () => {
    return {
      scubaDiving: false,
      hiking: false,
      hunting: false,
      fishing: false,
      other: false,
    };
  };

  const [activities, setActivities] = useState({
    scubaDiving: true,
    hiking: true,
    hunting: true,
    fishing: true,
    other: true,
  });
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const filterPursuits = () => {
    const filtered = pursuitsData.filter((pursuit) => {
      // Filter by destination
      if (destination && !pursuit.location.toLowerCase().includes(destination.toLowerCase())) {
        return false;
      }
      // Filter by activity
      if (!activities[pursuit.activity]) {
        return false;
      }
      // Filter by minimum price
      if (minPrice && pursuit.price < minPrice) {
        return false;
      }
      // Filter by maximum price
      if (maxPrice && pursuit.price > maxPrice) {
        return false;
      }

      return true;
    });

    setFilteredPursuits(filtered);
  };

  useEffect(() => {
    filterPursuits();
  }, [destination, date, options, activities, minPrice, maxPrice]);

  // Update activity checkboxes
  const handleActivityChange = (event) => {
    const { name, checked } = event.target;
    setActivities((prevActivities) => ({ ...prevActivities, [name]: checked }));
  };

  useEffect(() => {
    if (activity) {
      setActivities((prevActivities) => ({
        ...resetActivities(),
        [activity]: true,
      }));
    }
  }, [activity]);
  
  return (
    <div>
      <Navbar />
      <div className="exploreContainer">
        <div className="exploreWrapper">
          <div className="filterContainer">
            <h1 className="filterTitle">Search for your next adventure</h1>
            <div className="filterItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" value={destination} onChange={(e) => setDestination(e.target.value)}/>
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
                <input type="checkbox" name="scubaDiving" checked={activities.scubaDiving} onChange={handleActivityChange}/>
                  Scuba Diving
              </label>
              <label>
                <input type="checkbox" name="hiking" checked={activities.hiking} onChange={handleActivityChange}/>
                  Hiking
              </label>
              <label>
                <input type="checkbox" name="hunting" checked={activities.hunting} onChange={handleActivityChange}/>
                  Hunting
              </label>
              <label>
                <input type="checkbox" name="fishing" checked={activities.fishing} onChange={handleActivityChange}/>
                  Fishing
              </label>
              <label>
                <input type="checkbox" name="other" checked={activities.other} onChange={handleActivityChange}/>
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
                  <input type="number" className="filterOptionInput" onChange={(e) => setMinPrice(parseInt(e.target.value))}/>
                </div>
                <div className="filterOptionItem">
                  <span className="filterOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="filterOptionInput" onChange={(e) => setMaxPrice(parseInt(e.target.value))}/>
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
            {filteredPursuits.map((pursuit, index) => (
              <ExploreItem
                key={index}
                title={pursuit.title}
                imgSrc={pursuit.imgSrc}
                location={pursuit.location}
                description={pursuit.description}
                instructorName={pursuit.instructorName}
                instructorRating={pursuit.instructorRating}
                instructorImgSrc={pursuit.instructorImgSrc}
                price={pursuit.price}
                rating={pursuit.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;