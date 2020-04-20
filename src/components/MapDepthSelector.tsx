/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { styles } from './MapDepthSelector.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const MapDepthSelector = (props) => {
  const { currentDepth, maxDepth, zeroMapDepth, decreaseMapDepth, increaseMapDepth, maximizeMapDepth } = props

  const theme: Theme = useTheme()
  const s = styles(theme)

  return (
    <div css={css(s.mapDepthSelector)}>
      <button onClick={zeroMapDepth} css={s.isDisabled('down', currentDepth, maxDepth)}>
        ◀◀
      </button>
      <button onClick={decreaseMapDepth} css={s.isDisabled('down', currentDepth, maxDepth)}>
        ◀
      </button>
      <button onClick={increaseMapDepth} css={s.isDisabled('up', currentDepth, maxDepth)}>
        ▶
      </button>
      <button onClick={maximizeMapDepth} css={s.isDisabled('up', currentDepth, maxDepth)}>
        ▶▶
      </button>
    </div>
  )
}
