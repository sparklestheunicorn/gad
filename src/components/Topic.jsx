import * as React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Topic.scss'

export const Topic = (props) => {
  const { title, subdebates, exploreScore } = props

  return (
    <div className="topic-container">
      <button className="topic-title circle circle-l bezel-s">
        <h2>{title}</h2>
      </button>
      <button className="topic-search circle circle-s bezel-xs drop-shadow">🔍</button>
      <button className="topic-media circle circle-m bezel-xs drop-shadow">
        <p>media</p>
      </button>
      <button className="topic-score circle circle-m bezel-xs drop-shadow">
        <p>{exploreScore}%</p>
        <p>explore score</p>
      </button>
      <button className="topic-subdebates circle circle-m bezel-xs drop-shadow">
        <p>{subdebates}</p>
        <p>sub-debates</p>
      </button>
      <button className="topic-help circle circle-s bezel-xs drop-shadow">
        <p>?</p>
      </button>
    </div>
  )
}
