import * as React from 'react'

import { TitleBlock } from '../components/TitleBlock'
import { FadeOut } from '../components/FadeOut'
import { Position } from '../components/Position'

import '../styles/Positions.scss'

export const Positions = (props) => {
  const positions = [
    { title: "It's uncertain", positionCount: 6, exploreScore: 1 },
    { title: 'Impossible to know', positionCount: 6, exploreScore: 33 },
    { title: 'Yes', positionCount: 14, exploreScore: 100 },
    { title: 'No', positionCount: 22 },
    { title: "It's uncertain", positionCount: 6, exploreScore: 0 },
    { title: 'Impossible to know', positionCount: 6, exploreScore: 0 },
    { title: 'Yes', positionCount: 14 },
    { title: 'No', positionCount: 22, exploreScore: 0 },
  ]

  return (
    <main className="page positions">
      <FadeOut />
      <section className="top-container">
        <TitleBlock title="Is climate change happening?" titleSize="l" subtitle="Start exploring positions" />
      </section>
      <section className="bottom-container">
        <div className="positions-container">
          {positions.map((item, index) => {
            return (
              <Position
                key={index}
                title={item.title}
                positionCount={item.positionCount}
                exploreScore={item.exploreScore > -1 ? item.exploreScore : 0}
                ctaUrl={'/reasons'}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
