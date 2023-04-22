import NavBar from "../../components/Navbar/Navbar"
import HomeHeader from "../../components/HomeHeader/HomeHeader"
import Destinations from "../../components/Destinations/Destinations"
import Activities from "../../components/Activities/Activities"
import "./Home.css"


const Home = () => {
  return ( 
    <div className="root">
      <div className="gradient">
        <div className="bg-img">
          <NavBar />
          <HomeHeader />
        </div>
      </div>
      <div className="list-container">
        <h1 className="home-title">Choose from a world of possibilities</h1>

        <h2 className="list-title">Our most popular destinations</h2>
        <Destinations />

        <h2 className="list-title">Our most popular activities</h2>
        <Activities />
      </div>
    </div>
    

    
  )
}

export default Home