import * as React from 'react'

import { Position } from '../components/Position'
import { Reason } from '../components/Reason'
import { TitleBlock } from '../components/TitleBlock'

import '../styles/Reasons.scss'

export const Reasons = (props) => {
  let position = { title: 'Yes', positionCount: 14, exploreScore: 100 }
  let reasons = [
    { title: 'Evidenced by global temperature changes' },
    { title: 'Evidenced by ocean acidification' },
    { title: 'Evidenced by increased natural disaster frequency' },
    { title: 'Evidenced by increased natural disaster intensity' },
    { title: 'Evidenced by global temperature changes' },
    { title: 'Evidenced by increased natural disaster frequency' },
    { title: 'Evidenced by ocean acidification' },
    { title: 'Evidenced by increased natural disaster intensity' },
  ]

  return (
    <main className="page reasons">
      <section className="top-container">
        <Position title={position.title} positionCount={position.positionCount} exploreScore={position.exploreScore} />
        <TitleBlock
          title="Climate change is happening"
          titleSize="m"
          subtitle="Explore the reasons that support this position"
          subtitleSize="xs"
        />
      </section>
      <section className="bottom-container">
        <ul className="reasons-list">
          {reasons.map((item, index) => {
            return (
              <li key="index">
                <Reason title={item.title} ctaUrl={item.ctaUrl} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
