/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { MapQuestions } from '../components/MapQuestions'
import { MapDepthSelector } from '../components/MapDepthSelector'

import { useTheme } from 'emotion-theming'
import { Theme } from '../styles/themes/Theme.type'
import { styles } from './Map.style'

export const Map = observer((props) => {
  const { questions } = props

  const theme: Theme = useTheme()
  const s = styles(theme)

  const [mapDepth, setMapDepth] = React.useState(0)
  const [maxMapDepth, setMaxMapDepth] = React.useState(0)

  return (
    <div className="page" css={s.page}>
      <header css={s.topContainer}>
        <Link to="/">
          <img src={theme.image.titleTransparent} alt={`${theme.strings.title} - ${theme.strings.tagline}`} />
        </Link>
      </header>
      <main css={css(s.mapContainer)}>
        <section css={s.slideToDepth(mapDepth)}>
          <MapQuestions questions={questions} setMapDepth={setMapDepth} setMaxMapDepth={setMaxMapDepth} />
        </section>
      </main>
      <footer css={s.mapFooter}>
        <MapDepthSelector
          currentDepth={mapDepth}
          maxDepth={maxMapDepth}
          zeroMapDepth={() => setMapDepth(0)}
          decreaseMapDepth={() => {
            if (mapDepth > 0) {
              setMapDepth(mapDepth - 1)
            }
          }}
          increaseMapDepth={() => {
            if (mapDepth < maxMapDepth) {
              setMapDepth(mapDepth + 1)
            }
          }}
          maximizeMapDepth={() => setMapDepth(maxMapDepth)}
        />
      </footer>
    </div>
  )
})
