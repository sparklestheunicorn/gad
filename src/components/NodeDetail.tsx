/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import range from 'lodash/range'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'

export const NodeDetail = ({ nodeId, currentPhrasingIndex, setCurrentPhrasingIndex, numPhrasings, terms }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  if (nodeId !== 'wlTKYdgGTi-L43GWvEX31Q') return null
  return (
    <>
      <div css={s.rephraseContainer}>
        <button
          css={s.carouselArrow}
          onClick={() => {
            if (currentPhrasingIndex === 0) {
              setCurrentPhrasingIndex(numPhrasings - 1)
            } else {
              setCurrentPhrasingIndex(currentPhrasingIndex - 1)
            }
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        {range(numPhrasings).map((index) => (
          <button
            css={s.carouselDot(index === currentPhrasingIndex)}
            key={`${nodeId}-phrasing-${index}`}
            onClick={() => setCurrentPhrasingIndex(index)}
          ></button>
        ))}
        <button css={s.carouselArrow} onClick={() => setCurrentPhrasingIndex((currentPhrasingIndex + 1) % numPhrasings)}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
      {terms && (
        <div>
          {terms.map((term) => {
            return (
              term && (
                <p key={term.name}>
                  <span css={css(s.termName)}>{term.name}: </span>
                  <span>{term.definition}</span>
                </p>
              )
            )
          })}
        </div>
      )}
    </>
  )
}
