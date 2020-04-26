/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'
import { stylizedButton } from '../styles/shared.style'

export const NodeDetail = ({ nodeId, nextPhrasing }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  if (nodeId !== 'wlTKYdgGTi-L43GWvEX31Q') return null
  return (
    <button css={css([stylizedButton(theme), s.rephrase])} onClick={nextPhrasing}>
      Rephrase
    </button>
  )
}
