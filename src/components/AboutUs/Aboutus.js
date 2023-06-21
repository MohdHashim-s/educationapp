import React from 'react'
import './Aboutus.css'
import founder from '../../assets/img/founder.jpg'
function Aboutus() {
  return (
    <div className='container'>
        <div className="about-us-container">
            <div className="team-members">
                <h2>Our team</h2>
                <div className="member-card">
                    <img src={founder} alt="" className="member-image" />
                    <h2 className="member-name">Mohammed hashim s</h2>
                    <p className="member-role">Co founder</p>
                </div>
            </div>
        <div className="about-us-description">
            <h1 className="about-us-heading">About us</h1>
            <p>With a position for empowering learnerws of all ages,our mission 
                is to make eduction accessable,engaging and personalized 
                through our cutting-edge educational technology platforms
            </p>
        </div>
        </div>

    </div>
  )
}

export default Aboutus