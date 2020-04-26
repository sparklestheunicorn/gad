/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import range from 'lodash/range'
import React from 'react'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'
import { stylizedButton } from '../styles/shared.style'

export const NodeDetail = ({ nodeId, currentPhrasingIndex, setCurrentPhrasingIndex, numPhrasings }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  if (nodeId !== 'wlTKYdgGTi-L43GWvEX31Q') return null
  return (
    <div css={s.rephraseContainer}>
      <button css={s.carouselArrow} onClick={() => setCurrentPhrasingIndex((currentPhrasingIndex - 1) % numPhrasings)}>
        ◀
      </button>
      {range(numPhrasings).map((index) => (
        <button
          css={s.carouselDot(index === currentPhrasingIndex)}
          key={`${nodeId}-phrasing-${index}`}
          onClick={() => setCurrentPhrasingIndex(index)}
        ></button>
      ))}
      <button css={s.carouselArrow} onClick={() => setCurrentPhrasingIndex((currentPhrasingIndex + 1) % numPhrasings)}>
        ▶
      </button>
    </div>
  )
}
