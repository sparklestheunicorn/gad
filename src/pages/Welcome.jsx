import * as React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Welcome.scss'
import gadTitle from '../assets/gad-title.png'

export const Welcome = (props) => {
  return (
    <div className="page welcome">
      <img className="title-image" src={gadTitle} />
      <h3>
        <span>america's arguments,</span> <span>all in one place</span>
      </h3>
      <div className="bottom-container">
        <Link to="/home" className="explore-button stylized-button">
          Explore
        </Link>
        <div className="welcome-animation">
          <div className="animation-container">
            <div className="speech-bubble decorative reversed"></div>
            <div className="speech-bubble decorative"></div>
            <div className="speech-bubble decorative reversed"></div>
            <div className="speech-bubble decorative"></div>
            <div className="speech-bubble decorative"></div>
            <div className="speech-bubble decorative"></div>
            <div className="speech-bubble decorative"></div>
          </div>
          <div className="animation-container">
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
          <div className="animation-container">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
