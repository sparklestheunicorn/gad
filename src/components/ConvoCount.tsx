/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { styles } from './ConvoCount.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const ConvoCount = ({ showNumber, numberConvos, isSelected, onClick }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  return (
    <div css={[s.convoCount, isSelected ? s.expanded : s.canExpand]} onClick={onClick}>
      {showNumber ? (
        <>
          <p css={s.number}>{numberConvos}</p>
          <p css={s.convos}>convos</p>
        </>
      ) : isSelected ? (
        <span css={s.arrow}>►</span>
      ) : (
        <span css={s.plus}>+</span>
      )}
    </div>
  )
}
