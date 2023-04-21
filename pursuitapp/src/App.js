import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Activity from "./pages/activity/Activity";
import Planning from "./pages/planning/Planning";
import Confirmation from './pages/confirmation/Confirmation';
import InstructorInfo from './pages/instructorInfo/InstructorInfo';
import MyAccount from "./pages/myaccount/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Activity" element={<Activity/>}/>
        <Route path="/Planning" element={<Planning/>}/>
        <Route path="/Confirmation" element={<Confirmation/>}/>
        <Route path="/InstructorInfo" element={<InstructorInfo/>}/>
        <Route path="/MyAccount" element={<MyAccount/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;