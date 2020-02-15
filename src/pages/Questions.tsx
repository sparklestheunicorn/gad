import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer } from "mobx-react";

import { PageEffects } from '../components/PageEffects'
import { ExploreScore } from '../components/ExploreScore'
import '../styles/Questions.scss'
import { TitleBlock } from '../components/TitleBlock'
import { GetNodeChildren, GetNode, GetNodeChildrenL2 } from "../subrepos/dm-server/Source/@Shared/Store/firebase/nodes";

// uuid of the root Climate Change debate map
export const mainMapID = "RfTurKY-Tk-sxKX24T6KAw";
export const mainMap_rootNodeID = "qFVvF2FMQVW94RoU741AzA";

export const Questions = observer((props) => {
  /*const questions = [
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
  ]*/

  const questions = GetNodeChildrenL2(mainMap_rootNodeID);
  const questionPositions = questions.map(question=>GetNodeChildren(question._key));

  return (
    <main className="page questions">
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <section className="top-container">
        <TitleBlock title="Select your debate question" />
        <ExploreScore exploreScore={38} />
      </section>
      <section className="bottom-container">
        <div className="question-list-container paper-background">
          <ul className="question-list scroll-list">
            {questions.map((item, index) => {
              return (
                <li key={index}>
                  <Link to="/positions">
                    <span className="question-number">{index + 1}</span>
                    <span className="question">{item.current.titles.base}</span>
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
});
