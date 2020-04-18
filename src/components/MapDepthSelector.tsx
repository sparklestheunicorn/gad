/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { mapDepthSelector, disabled } from '../styles/MapDepthSelector.style'
import { covidConversation as cc } from '../styles/CovidConversation'

export const MapDepthSelector = (props) => {
  const { currentDepth, maxDepth, zeroMapDepth, decreaseMapDepth, increaseMapDepth, maximizeMapDepth } = props

  return (
    <div css={css([cc.mapDepthSelector, mapDepthSelector])}>
      <button onClick={zeroMapDepth} css={disabled('down', currentDepth, maxDepth)}>
        ◀◀
      </button>
      <button onClick={decreaseMapDepth} css={disabled('down', currentDepth, maxDepth)}>
        ◀
      </button>
      <button onClick={increaseMapDepth} css={disabled('up', currentDepth, maxDepth)}>
        ▶
      </button>
      <button onClick={maximizeMapDepth} css={disabled('up', currentDepth, maxDepth)}>
        ▶▶
      </button>
    </div>
  )
}
