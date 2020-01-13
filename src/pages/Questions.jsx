import * as React from 'react'
import { Link } from 'react-router-dom'

import { FadeOut } from '../components/FadeOut'
import { ExploreScore } from '../components/ExploreScore'
import '../styles/Questions.scss'

export const Questions = (props) => {
  const questions = [
    { title: 'What is climate change?', positions: 6 },
    { title: 'What causes it?', positions: 6 },
    { title: 'Is it happening?', positions: 14 },
    { title: 'Is it a threat?', positions: 22 },
    { title: 'What could or should be done?', positions: 9 },
    { title: 'What is climate change?', positions: 6 },
    { title: 'What causes it?', positions: 6 },
    { title: 'Is it happening?', positions: 14 },
    { title: 'Is it a threat?', positions: 22 },
    { title: 'What could or should be done?', positions: 9 },
  ]

  return (
    <section className="page questions">
      <FadeOut />
      <h1>
        <span>Select your</span>
        <span>debate question</span>
      </h1>
      <ExploreScore exploreScore={38} />
      <div className="question-list-container paper-background">
        <ul className="question-list ">
          {questions.map((item, index) => {
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
          })}
        </ul>
      </div>
      <p className="tip">Tip: Start with the first question and work your way through</p>
    </section>
  )
}
