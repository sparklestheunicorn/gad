import * as React from 'react'
window.React = React // This is an ugly workaround for https://github.com/emotion-js/emotion/issues/1303
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from '../styles/themes/Theme.type'
import { styles } from './MapIntro.style'
import { heading, stylizedButton } from '../styles/shared.style'

export const MapIntro = () => {
  const theme: Theme = useTheme()

  const [dismissed, setDismissed] = React.useState(false)

  if (dismissed) return null

  const s = styles(theme)

  return (
    <div css={s.mapIntroContainer}>
      <h2 css={[heading(theme), s.introHeader]}>WE ARE ANTI-CENSORSHIP</h2>
      <p>You may see content you dislike and disagree with, but we hope you'll approach this with an open mind.</p>
      <p css={s.linkLine}>
        Learn more about our values{' '}
        <a css={s.link} href="http://www.covidconvo.org/values">
          here
        </a>
        .
      </p>
      <button css={stylizedButton(theme)} onClick={() => setDismissed(true)}>
        Got it!
      </button>
    </div>
  )
}
