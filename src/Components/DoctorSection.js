import React from 'react'
import docimage from '../Assets/Subodh Borle.jpg'
import Radhika from '../Assets/Radhika Agrawal.jpg'
import Nisha from '../Assets/Nisha jangde.jpg'
import Rajesh from '../Assets/Rajesh Hingwe.jpg'
import './DoctorSection.css'

const DoctorSection = () => {
  return (
    <div id="doctors" className="doctor">
      <div className="container text-center">
        <h1 className="pt-5">Our Doctors</h1>
        <hr />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="fw-bold">
                  Dr. Subodh Borle <br />{' '}
                  <small>Spine and Orthopedics Surgeon</small>{' '}
                </h5>
                <img src={docimage} className="img-fluid" alt="" />
                <p className="pt-3">
                  An orthopaedic spine surgeon is an orthopaedist who further
                  specializes in the diagnosis and treatment of spinal diseases
                  and conditions. Spine & Orthopedics
                </p>
                <span style={{ color: 'rgb(87, 87, 236)', fontSize: '20px' }}>
                  <i className="fab fa-facebook-f m-2"></i>
                </span>
                <span style={{ color: 'rgb(150, 150, 231)', fontSize: '20px' }}>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="fw-bold">
                  Dr. Radhika Agrawal <br />{' '}
                  <small>Physiotherapy and Rehabilitation</small>{' '}
                </h5>
                <img src={Radhika} className="img-fluid" alt="" />
                <p className="pt-3">
                  Physiotherapy is mostly focused on movement of body organs and
                  body strength. Orthopaedic physiotherapy is the most common
                  form of physical therapy
                </p>
                <span style={{ color: 'rgb(87, 87, 236)', fontSize: '20px' }}>
                  <i className="fab fa-facebook-f m-2"></i>
                </span>
                <span style={{ color: 'rgb(150, 150, 231)', fontSize: '20px' }}>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="fw-bold">
                  Dr. Nishu Jangde <br />{' '}
                  <small>Physiotherapy and Rehabilitation</small>{' '}
                </h5>
                <img src={Nisha} className="img-fluid" alt="" />
                <p className="pt-3">
                  Physiotherapy is mostly focused on movement of body organs and
                  body strength. Orthopaedic physiotherapy is the most common
                  form of physical therapy
                </p>
                <span style={{ color: 'rgb(87, 87, 236)', fontSize: '20px' }}>
                  <i className="fab fa-facebook-f m-2"></i>
                </span>
                <span style={{ color: 'rgb(150, 150, 231)', fontSize: '20px' }}>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="fw-bold">
                  Dr. Rajesh Hingwe <br />{' '}
                  <small>Orthopaedic and Joint Replacement</small>{' '}
                </h5>
                <img src={Rajesh} className="img-fluid" alt="" />
                <p className="pt-3">
                  Arthroplasty, also called joint replacement, is surgery to
                  replace a damaged joint with an artificial joint (made of
                  metal, ceramic, or plastic) joint replacement.
                </p>
                <span style={{ color: 'rgb(87, 87, 236)', fontSize: '20px' }}>
                  <i className="fab fa-facebook-f m-2"></i>
                </span>
                <span style={{ color: 'rgb(150, 150, 231)', fontSize: '20px' }}>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default DoctorSection
