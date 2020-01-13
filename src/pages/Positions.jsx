import * as React from 'react'

import { TitleBlock } from '../components/TitleBlock'
import { ExploreScore } from '../components/ExploreScore'
import { FadeOut } from '../components/FadeOut'

import '../styles/Positions.scss'

export const Positions = (props) => {
  const positions = [
    { title: "It's uncertain", positions: 6 },
    { title: 'Impossible to know', positions: 6 },
    { title: 'Yes', positions: 14 },
    { title: 'No', positions: 22 },
    { title: "It's uncertain", positions: 6 },
    { title: 'Impossible to know', positions: 6 },
    { title: 'Yes', positions: 14 },
    { title: 'No', positions: 22 },
  ]

  return (
    <section className="page positions">
      <FadeOut />
      <div className="top-container">
        <TitleBlock title="Is climate change happening?" titleSize="l" subtitle="Start exploring positions" />
      </div>
      <div className="bottom-container">
        <div className="positions-container">
          {positions.map((item, index) => {
            return (
              <div class="position" key={index}>
                <div className="position-count circle circle-s bezel-xs drop-shadow">
                  <p>{item.positions}</p>
                  <p>positions</p>
                </div>
                <ExploreScore exploreScore={0} size="s" />
                <div className="speech-bubble">
                  <h3 className="position-title text-size-m">{item.title}</h3>
                  <p>Explore now ></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
