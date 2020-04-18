/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { mapDepthSelector, isDisabled } from '../styles/MapDepthSelector.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const MapDepthSelector = (props) => {
  const { currentDepth, maxDepth, zeroMapDepth, decreaseMapDepth, increaseMapDepth, maximizeMapDepth } = props

  const theme: Theme = useTheme()

  return (
    <div css={css(mapDepthSelector(theme))}>
      <button onClick={zeroMapDepth} css={isDisabled('down', currentDepth, maxDepth, theme)}>
        ◀◀
      </button>
      <button onClick={decreaseMapDepth} css={isDisabled('down', currentDepth, maxDepth, theme)}>
        ◀
      </button>
      <button onClick={increaseMapDepth} css={isDisabled('up', currentDepth, maxDepth, theme)}>
        ▶
      </button>
      <button onClick={maximizeMapDepth} css={isDisabled('up', currentDepth, maxDepth, theme)}>
        ▶▶
      </button>
    </div>
  )
}
