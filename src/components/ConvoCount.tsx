/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { styles } from './ConvoCount.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const ConvoCount = ({ numberConvos }) => {
  const theme: Theme = useTheme()
  const { convoCount, number, convos } = styles(theme)
  return (
    <div css={convoCount}>
      <p css={number}>{numberConvos}</p>
      <p css={convos}>convos</p>
    </div>
  )
}
