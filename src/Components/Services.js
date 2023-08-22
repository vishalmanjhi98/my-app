// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';

// function GroupExample() {
//   return (
//     <CardGroup>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="http://bitly.ws/SgRo" />
//       <Card.Body>
//         <Card.Title>Doctors</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Add/View</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="http://bitly.ws/SgQi" />
//       <Card.Body>
//         <Card.Title>Hospitals</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button bg="dark" variant="primary">Add/View</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="http://bitly.ws/SgRo" />
//       <Card.Body>
//         <Card.Title>Patient</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Add/View</Button>
//       </Card.Body>
//     </Card>
//     </CardGroup>
//   );
// }

// export default GroupExample;

import React from 'react'
import Imagee from '../Assets/Doctor image.jpg'
import Imageeee from '../Assets/patent.jpg'
import Imageee from '../Assets/hsptal.jpg'
import DoctorManagement from './DoctorManagement'
import { useState } from 'react'

const Features = () => {
  const [isDoctorManagementOpen, setIsDoctorManagementOpen] = useState(false)

  const handleOpenDoctorManagement = () => {
    setIsDoctorManagementOpen(true)
  }
  return (
    <div
      id="feature"
      className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-amber-800">Services</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          <b>
            <h3>How Can We Help You Today?</h3>
          </b>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Imagee}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Our Doctors
                </h3>
                <p className="text-sm text-gray-500">BDS | Surgeons | MBBS</p>
                <p className="text-lg font-bold text-gray-700 mt-4">
                  Our Highly Trained Doctors
                </p>
                <button
                  onClick={handleOpenDoctorManagement}
                  className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700"
                >
                  Doctors
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Imageee}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Hospital Facilites
                </h3>
                <p className="text-sm text-gray-500">
                  Comfortable Beds | 24x7 Service | Nursing Staff Available
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">
                  24x7 Service Available
                </p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  Hospitals
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Imageeee}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Happy Patients
                </h3>
                <p className="text-sm text-gray-500">
                  Caring | Rutine Checkup | Ambulance Service
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">
                  We Care Our Patients
                </p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
