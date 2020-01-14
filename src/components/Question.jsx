import React from 'react'

export const Question = (props) => {
  return (
    <li key={index}>
      <Link to="/positions">
        <span className="question-number">{index + 1}</span>
        <span className="question">{item.title}</span>
      </Link>
      <div className="circle circle-s bezel-xs drop-shadow">
        <p>{item.positions}</p>
        <p>positions</p>
      </div>
    </li>
  )
}
