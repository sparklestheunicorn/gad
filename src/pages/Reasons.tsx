import * as React from 'react'

import { Position } from '../components/Position'
import { Reason } from '../components/Reason'
import { TitleBlock } from '../components/TitleBlock'

import '../styles/Reasons.scss'
import {useParams} from 'react-router-dom'
import {GetNodeL2} from '../subrepos/dm-server/Source/@Shared/Store/firebase/nodes/$node'
import {GetPositionReasons, GetFinalNodeTitle} from '../firestore/firestore'
import {observer} from 'mobx-react'

export const Reasons = observer((props) => {
  /*let position = { title: 'Yes', positionCount: 14, exploreScore: 100 }
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
  ]*/
  const { id } = useParams();
  let position = GetNodeL2(id);
  if (position == null) return null; // still loading
  let reasons = GetPositionReasons(id);
  let exploreScore = 0;

  return (
    <main className="page reasons">
      <section className="top-container bezel-l">
        <Position title={GetFinalNodeTitle(position)} positionCount={reasons.length} exploreScore={exploreScore} />
        <TitleBlock
          title={GetFinalNodeTitle(position)}
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
                <Reason title={GetFinalNodeTitle(item)} ctaUrl={"reasons"} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
});
