import Navbar from './Components/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Imageslider from './Components/Imageslider'
import Services from './Components/Services'
import './index.css'
import Footer from './Components/Footer'
import Facilities from './Components/Facilities'
import About from './Components/About'
import DoctorSection from './Components/DoctorSection'
import Navv from './Components/navv'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navv/> */}
      <Imageslider />
      <Services />
      <DoctorSection />
      <Facilities />
      <About />
      <Footer />
      {/* <button onClick={handleOpenDoctorManagement}>Open Doctor Management</button> */}
    </div>
  )
}

export default App
