/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { styles } from './ConvoCount.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const ConvoCount = ({ showNumber, numberConvos, isSelected, onClick, hasDetails }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  return (
    <button css={[s.convoCount(hasDetails), isSelected ? s.expanded : s.canExpand]} onClick={onClick}>
      {showNumber ? (
        <>
          <p css={s.number}>{numberConvos}</p>
          <p css={s.convos}>convos</p>
        </>
      ) : (
        <FontAwesomeIcon icon={faCaretRight} css={s.arrow} size="3x" />
      )}
    </button>
  )
}
