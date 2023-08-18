import Navbar from './Components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imageslider from './Components/Imageslider';
import Services from './Components/Services';
import './index.css';
import Footer from './Components/Footer';
import Facilities from './Components/Facilities';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Imageslider/>
      <Services/>
      <Facilities/>
      <Footer/>
      {/* <button onClick={handleOpenDoctorManagement}>Open Doctor Management</button> */}
    </div>
  );
}

export default App;