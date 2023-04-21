import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Destinations from "../../components/Destinations/Destinations"
import Activities from "../../components/Activities/Activities"
import "./Home.css"


const Home = () => {
  return ( 
    <div className="root">
      <div className="gradient">
        <div className="bg-img">
          <Navbar />
          <Header />
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