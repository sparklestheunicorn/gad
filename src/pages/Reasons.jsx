import * as React from 'react'

import { Position } from '../components/Position'
import { Reason } from '../components/Reason'
import { TitleBlock } from '../components/TitleBlock'

import '../styles/Reasons.scss'

export const Reasons = (props) => {
  let position = { title: 'Yes', positionCount: 14, exploreScore: 100 }
  let reasons = [
    { title: 'Evidenced by global temperature changes', ctaUrl: 'reasons' },
    { title: 'Evidenced by ocean acidification', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster frequency', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster intensity', ctaUrl: 'reasons' },
    { title: 'Evidenced by global temperature changes', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster frequency', ctaUrl: 'reasons' },
    { title: 'Evidenced by ocean acidification', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster intensity', ctaUrl: 'reasons' },
    { title: 'Evidenced by global temperature changes', ctaUrl: 'reasons' },
    { title: 'Evidenced by ocean acidification', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster frequency', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster intensity', ctaUrl: 'reasons' },
    { title: 'Evidenced by global temperature changes', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster frequency', ctaUrl: 'reasons' },
    { title: 'Evidenced by ocean acidification', ctaUrl: 'reasons' },
    { title: 'Evidenced by increased natural disaster intensity', ctaUrl: 'reasons' },
  ]

  return (
    <main className="page reasons">
      <section className="top-container bezel-l">
        <Position title={position.title} positionCount={position.positionCount} exploreScore={position.exploreScore} />
        <TitleBlock
          title="Climate change is happening"
          titleSize="m"
          subtitle="Explore the reasons that support this position"
          subtitleSize="xs"
        />
      </section>
      <section className="scroll-gradient-top scroll-gradient-bottom bottom-container">
        <ul className="reasons-list scroll-list">
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
