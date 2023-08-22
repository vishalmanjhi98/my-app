import React from 'react'

const AboutUs = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row w-full h-screen bg-gray-100 "
    >
      <div className="w-full  p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
          <hr />
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We offer complete home health and hospice services here at TTP
            HEALTH, with a focus on dementia care. Contact us today at{' '}
            <a href="/" title="glorythemes">
              +91-82-333-9-3456
            </a>{' '}
            to learn more.
            <br />
            <br />
            Heart failure is a complex clinical syndrome marked by insufficient
            cardiac function. In addition to abnormalities in the heart,
            dysfunction of other organs can impact the development and effects
            of heart failure. The heart and kidneys function together to get an
            adaptive response to cardiac pressure overload.
            <br />
            <br />A recent study by the National Institutes of Health shows a
            dynamic network involving the heart, brain and kidneys that is
            needed to properly respond to cardiac stress.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
