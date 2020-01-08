import * as React from 'react'

export const ExploreScore = (props) => {
  const { exploreScore } = props

  return (
    <button className="explore-score circle circle-m bezel-xs drop-shadow">
      <p>{exploreScore}%</p>
      <p>explore score</p>
    </button>
  )
}
