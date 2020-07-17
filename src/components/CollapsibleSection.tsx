/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './CollapsibleSection.style'

const CollapsibleSection = ({ title = null, contentExists, children }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  const [open, setOpen] = React.useState(false)

  return contentExists ? (
    <>
      {title && (
        <h4
          css={s.title}
          onClick={() => {
            setOpen(!open)
          }}
        >
          {title}
        </h4>
      )}
      <div css={s.content(open)}>{children}</div>
    </>
  ) : null
}

export default CollapsibleSection
