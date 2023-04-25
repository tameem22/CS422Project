import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Activity from "./pages/activity/Activity";
import Confirmation from './pages/confirmation/Confirmation';
import InstructorInfo from './pages/instructorInfo/InstructorInfo';
import Checkout from './pages/checkout/Checkout';
import MyPlans from './pages/myplans/MyPlans';
import Location from './pages/location/Location';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/InstructorInfo" element={<InstructorInfo />} />
        <Route path="/MyPlans" element={<MyPlans />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;