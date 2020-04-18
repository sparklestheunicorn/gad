import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../styles/themes/Theme.type'

import { PageEffects } from '../../components/PageEffects'

export const GreatAmericanDebateWelcome = (props) => {
  const theme: Theme = useTheme()

  return (
    <section className="page welcome">
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <div className="font-preloader">
        <span>Load</span> <span>the</span> <span>fonts</span>
      </div>
      <div className="top-container">
        <img
          className="title-image"
          src={require(`../../assets/images/${theme.image.title}`)}
          alt="The Great American Debate"
        />
        <h3 className="subheading">
          <span>america's arguments,</span> <span>all in one place</span>
        </h3>
      </div>
      <div className="bottom-container">
        <Link to="/debates" className="explore-button stylized-button drop-shadow">
          Explore
        </Link>

        <div className="welcome-animation">
          <div className="animation-container">
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative reversed"></div>
            </div>
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative"></div>
            </div>
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative reversed"></div>
            </div>
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative"></div>
            </div>
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative"></div>
            </div>
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative"></div>
            </div>
            <div className="speech-bubble-container">
              <div className="speech-bubble decorative"></div>
            </div>
          </div>
          <div className="animation-container">
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
          <div className="animation-container">
            <div className="star-container">
              <div className="star"></div>
            </div>
            <div className="star-container">
              <div className="star"></div>
            </div>
            <div className="star-container">
              <div className="star"></div>
            </div>
            <div className="star-container">
              <div className="star"></div>
            </div>
            <div className="star-container">
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
