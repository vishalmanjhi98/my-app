import React from 'react'
import video from '../Assets/video.mp4'
const Demo = () => {
  return (
    <div
      id="demo"
      className="flex flex-col md:flex-row w-full h-screen bg-amber-800"
    >
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Our <span className="text-amber-800">Hospital </span>Facilities
          </h1>
          <div className="aspect-w-16 aspect-h-9">
            <video
              style={{ width: '400px' }}
              className="w-full h-full"
              controls
              autoPlay
              muted
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="text-white">
          {/* <h2 className="text-1xl font-bold mb-4">My Real Estate</h2> */}
          <a className="navbar-brand fs-1 fw-bold" href="#">
            <span style={{ color: '#00aeff' }}>Triple </span>
            <span style={{ color: '#306e97' }}>Top </span>
            <span style={{ color: '#00032e' }}>Pattern</span>
          </a>
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Hospital</h2>
          <ul className="list-disc list-inside mb-8">
            {/* <li className="flex items-center space-x-4">
              <img src={houseIcon} alt="House Icon" className="w-8 h-8" />
              <span>Spacious and comfortable living spaces</span>
            </li>
            <li className="flex items-center space-x-4 my-10">
              <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
              <span>Located in prime areas with excellent infrastructure</span>
            </li>
            <li className="flex items-center space-x-4 my-10">
              <img src={moneyIcon} alt="Money Icon" className="w-8 h-8" />
              <span>Affordable prices and flexible payment plans</span>
            </li> */}
            <p>
              TTP Health’s COMMUNITY Front Door simplifies healthcare navigation
              by providing a unified hub for all consumer interactions. The
              user-friendly interface guides people to the right resources and
              services for 24/7 streamlined access to care. Put more power in
              the hands of patients Our health system is facing multiple
              simultaneous pressures including overburdened healthcare workers,
              frustrated patients and caregivers, increasing costs and large
              equity gaps when it comes to healthcare access and delivery. TTP
              Health’s Digital Front Door enables all healthcare interactions to
              occur through a single channel including symptom assessments,
              trusted health information, referrals, access to complete medical
              records, care and remote monitoring. Our platform removes
              traditional barriers to care to engage people as active
              participants in their health journey. From symptom assessments to
              electronic referrals to virtual care and everything in between —
              we provide consumers with the convenience and support they need on
              their journey to better health. We work with organizations at all
              stages of Management and health to create and implement a platform
              that fits the needs of your organization and the communities you
              serve.
            </p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Demo
