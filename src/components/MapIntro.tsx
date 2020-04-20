import * as React from 'react'
window.React = React // This is an ugly workaround for https://github.com/emotion-js/emotion/issues/1303
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
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
      <h2 css={heading(theme)}>Before You Begin</h2>
      <p>
        This is a library project supported by an international group of volunteers, however it is a U.S. based non-profit
        library, therefore
      </p>
      <h3 css={heading(theme)}>we are anti-censorship</h3>
      <p>
        in accordance with the Library Bill of Rights, established by the Office of Intellectual Freedom of the American
        Library Association.
      </p>
      <p>
        Although it is the duty of U.S. libraries to curate collections to be relevant to their communities, this is an
        internet-based collection, therefore, we serve the online community at large. Due to resource constraints, most of
        the work here will be derived from U.S. based sources, for now.
      </p>
      <p>
        There may be many beliefs that you will immediately disagree with, however instead of disregarding them outright - we
        encourage you to explore their arguments and evidence (and add your own), so we may all be on the same page.
      </p>
      <p>Thank you for your open-mindedness.</p>
      <button css={stylizedButton(theme)} onClick={() => setDismissed(true)}>
        Got it!
      </button>
    </div>
  )
}
