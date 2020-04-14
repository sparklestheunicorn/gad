import * as React from 'react'

import { Link } from 'react-router-dom'

import { PageEffects } from '../../components/PageEffects'

export const CovidConversationWelcome = (props) => {
  const { themeId } = props
  return (
    <section className="page welcome">
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <div className="font-preloader">
        <span>Load</span> <span>the</span> <span>fonts</span>
      </div>
      <div className="top-container">
        <img
          className="title-image"
          src={require(`../../assets/images/${themeId}-title.png`)}
          alt="The Covid Conversation"
        />
      </div>
      <div className="bottom-container">
        <Link to="/map" className="explore-button stylized-button drop-shadow">
          Learn More
        </Link>
      </div>
    </section>
  )
}
