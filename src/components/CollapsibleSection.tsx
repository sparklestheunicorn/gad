/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './CollapsibleSection.style'

const CollapsibleSection = ({ title, contentExists, defaultOpen = false, children }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  const [open, setOpen] = React.useState(defaultOpen)

  return contentExists ? (
    <>
      <h4
        css={s.title}
        onClick={() => {
          setOpen(!open)
        }}
      >
        {`${title} `}
        {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </h4>
      <div css={s.content(open)}>{children}</div>
    </>
  ) : null
}

export default CollapsibleSection
