import * as React from 'react'

import { TitleBlock } from '../components/TitleBlock'
import { PageEffects } from '../components/PageEffects'
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
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <section className="top-container bezel-l drop-shadow">
        <TitleBlock title="Is climate change happening?" titleSize="l" subtitle="Start exploring positions" />
      </section>
      <section className="bottom-container scroll-gradient-top scroll-gradient-bottom ">
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
