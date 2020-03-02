import * as React from 'react'

import { TitleBlock } from '../components/TitleBlock'
import { PageEffects } from '../components/PageEffects'
import { Position } from '../components/Position'

import '../styles/Positions.scss'
import {useParams} from 'react-router-dom'
import {getQuestionPositions, getFinalNodeTitle} from '../firestore/firestore'
import {observer} from 'mobx-react'
import {GetNodeL2} from '@debate-map/server-link'

export const Positions = observer((props) => {
  /*const positions = [
    { title: "It's uncertain", positionCount: 6, exploreScore: 1 },
    { title: 'Impossible to know', positionCount: 6, exploreScore: 33 },
    { title: 'Yes', positionCount: 14, exploreScore: 100 },
    { title: 'No', positionCount: 22 },
    { title: "It's uncertain", positionCount: 6, exploreScore: 0 },
    { title: 'Impossible to know', positionCount: 6, exploreScore: 0 },
    { title: 'Yes', positionCount: 14 },
    { title: 'No', positionCount: 22, exploreScore: 0 },
  ]*/
  const { id } = useParams();
  const question = GetNodeL2(id);
  if (question == null) return null; // still loading
  const positions = getQuestionPositions(id);
  const exploreScore = 0;

  return (
    <main className="page positions">
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <section className="top-container bezel-l drop-shadow">
        <TitleBlock title={getFinalNodeTitle(question)} titleSize="l" subtitle="Start exploring positions" />
      </section>
      <section className="bottom-container scroll-gradient-top scroll-gradient-bottom ">
        <div className="positions-container">
          {positions.map((item, index) => {
            return (
              <Position
                key={index}
                title={getFinalNodeTitle(item)}
                positionCount={positions.length}
                exploreScore={exploreScore > -1 ? exploreScore : 0}
                ctaUrl={`/reasons/${item._key}`}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
});
