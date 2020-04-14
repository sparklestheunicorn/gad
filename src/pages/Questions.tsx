import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import { PageEffects } from '../components/PageEffects'
import { ExploreScore } from '../components/ExploreScore'
import '../styles/Questions.scss'
import { TitleBlock } from '../components/TitleBlock'
import { getQuestions, getQuestionPositions, getFinalNodeTitle } from '../firestore/firestore'

export const Questions = observer((props) => {
  const questions = getQuestions()
  const questionPositions = questions.map((question) => getQuestionPositions(question._key))

  return (
    <main className="page questions">
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <section className="top-container">
        <TitleBlock title="Select your debate question" />
        <ExploreScore exploreScore={38} />
      </section>
      <section className="bottom-container">
        <div className="question-list-container">
          <ul className="question-list scroll-list">
            {questions.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/positions/${item._key}`}>
                    <span className="question-number">{index + 1}</span>
                    <span className="question">{getFinalNodeTitle(item)}</span>
                  </Link>
                  <div className="circle circle-s bezel-xs drop-shadow">
                    <p>{questionPositions[index].length}</p>
                    <p>positions</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="tip">Tip: Start with the first question and work your way through</p>
      </section>
    </main>
  )
})
