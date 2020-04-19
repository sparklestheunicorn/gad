/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { convoCount } from './ConvoCount.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const ConvoCount = ({ numberConvos }) => {
  const theme: Theme = useTheme()
  return (
    <div css={convoCount(theme)}>
      <p>{numberConvos}</p>
      <p>convos</p>
    </div>
  )
}
