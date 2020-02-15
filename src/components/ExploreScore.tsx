import * as React from 'react'
import classNames from 'classnames'

import '../styles/ExploreScore.scss'

export const ExploreScore = (props) => {
  const { exploreScore, size } = props

  return (
    <button
      className={classNames(
        'explore-score',
        'circle',
        'bezel-xs',
        'drop-shadow',
        { 'circle-s': size === 's' },
        { 'circle-m': !size || size === 'm' },
        { 'circle-l': size === 'l' },
      )}
    >
      <p>{exploreScore}%</p>
      <p>explore score</p>
    </button>
  )
}
