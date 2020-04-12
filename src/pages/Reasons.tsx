import * as React from 'react'

import { Position } from '../components/Position'
import { Reason } from '../components/Reason'
import { TitleBlock } from '../components/TitleBlock'

import '../styles/Reasons.scss'
import { useParams } from 'react-router-dom'
import { GetNodeL2 } from '@debate-map/server-link'
import { getPositionReasons, getReasonEvidence, getFinalNodeTitle } from '../firestore/firestore'
import { observer } from 'mobx-react'

export const Reasons = observer((props) => {
  const { id } = useParams()
  let position = GetNodeL2(id)
  if (position == null) return null // still loading
  let reasons = getPositionReasons(id)
  let exploreScore = 0

  return (
    <main className="page reasons">
      <section className="top-container bezel-l">
        <Position title={getFinalNodeTitle(position)} positionCount={reasons.length} exploreScore={exploreScore} />
        <TitleBlock
          title={getFinalNodeTitle(position)}
          titleSize="m"
          subtitle="Explore the reasons that support this position"
          subtitleSize="xs"
        />
      </section>
      <section className="scroll-gradient-top scroll-gradient-bottom bottom-container">
        <ul className="reasons-list scroll-list">
          {reasons.map((item, index) => {
            console.log(item)
            let evidence = getReasonEvidence(item._key)
            console.log(evidence)
            return (
              <li key={index}>
                <Reason title={getFinalNodeTitle(item)} ctaUrl={'reasons'} />

                {/*<Evidence reasonId={item.} /> */}
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
})
