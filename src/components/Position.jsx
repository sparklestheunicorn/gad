import React from 'react'
import { Link } from 'react-router-dom'

import { ExploreScore } from '../components/ExploreScore'

import '../styles/Position.scss'

export const Position = (props) => {
  const { title, positionCount, exploreScore, ctaUrl } = props

  return (
    <div class="position">
      {positionCount && positionCount > -1 && (
        <div className="position-count circle circle-s bezel-xs drop-shadow">
          <p>{positionCount}</p>
          <p>positions</p>
        </div>
      )}
      {exploreScore !== undefined && exploreScore > -1 && <ExploreScore exploreScore={exploreScore} size="s" />}
      <div className="speech-bubble">
        <h3 className="position-title text-size-m">{ctaUrl ? <Link to={ctaUrl}>{title}</Link> : title}</h3>
        {ctaUrl && (
          <p>
            <Link to={ctaUrl}>Explore now ></Link>
          </p>
        )}
      </div>
    </div>
  )
}
