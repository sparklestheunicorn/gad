/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './Term.style'

const Term = ({ name, definition }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  return (
    <div css={s.termContainer} key={name}>
      <span css={css(s.termName)}>{name}: </span>
      <span css={css(s.termDefinition)}>{definition}</span>
    </div>
  )
}

export default Term
