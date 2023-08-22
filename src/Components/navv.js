import React from 'react'

const Navv = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="index.html">
              <img
                src="images/logo.jfif"
                className="img-fluid rounded-circle"
                width="70px"
                height="70px"
              />
            </a>
            <a className="navbar-brand fs-1 fw-bold ms-5" href="#">
              <span style={{ color: '#00aeff' }}>Triple</span>
              <span style={{ color: '#306e97' }}>Top</span>
              <span style={{ color: '#00032e' }}>Pattern</span>
            </a>

            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarcollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarcollapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link fs-5 mx-2" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 mx-3" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 mx-3" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navv
