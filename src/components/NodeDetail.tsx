/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'
import { stylizedButton } from '../styles/shared.style'

export const NodeDetail = ({ nodeId, nextPhrasing, terms }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  if (nodeId !== 'wlTKYdgGTi-L43GWvEX31Q') return null
  return (
    <>
      <div css={s.rephrase}>
        <button css={css([stylizedButton(theme)])} onClick={nextPhrasing}>
          Rephrase
        </button>
      </div>
      {terms && (
        <div css={s.terms}>
          {terms.map((term) => (
            <p key={term.term}>
              <span css={css(s.termName)}>{term.term}: </span>
              <span>{term.definition}</span>
            </p>
          ))}
        </div>
      )}
    </>
  )
}
