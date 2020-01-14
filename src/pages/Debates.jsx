import * as React from 'react'
import { Link } from 'react-router-dom'

import { TitleBlock } from '../components/TitleBlock'
import { Topic } from '../components/Topic'
import '../styles/Debates.scss'
import { FadeOut } from '../components/FadeOut'

export const Debates = (props) => {
  return (
    <main className="page debates">
      <FadeOut />
      <TitleBlock title="Welcome!" subtitle="please explore and search" />
      <Topic title="Climate Change" exploreScore={38} subdebates={170} />
      <Link to="/questions" className="page-cta">
        Get into the debate >
      </Link>
    </main>
  )
}
