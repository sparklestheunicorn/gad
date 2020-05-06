/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import range from 'lodash/range'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'
import { stylizedButton } from '../styles/shared.style'

export const NodeDetail = ({ nodeId, currentPhrasingIndex, setCurrentPhrasingIndex, numPhrasings, terms }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  const [inputItems, setInputItems] = React.useState([])
  const [newInputItem, setNewInputItem] = React.useState('')

  let inputTextChanged = (event) => {
    console.log(event.target.value)
    setNewInputItem(event.target.value)
  }

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
        <>
          <h4>Terms</h4>
          {terms.map((term) => {
            return (
              term && (
                <div css={s.termContainer} key={term.name}>
                  <span css={css(s.termName)}>{term.name}: </span>
                  <span css={css(s.termDefinition)}>{term.definition}</span>
                </div>
              )
            )
          })}
        </>
      )}
      {
        <>
          <h4>Send us your input and evidence</h4>
          <p>Try to break your argument into simple, small pieces. Include links to sources where possible.</p>
          <textarea
            onKeyUp={(event) => {
              inputTextChanged(event)
            }}
          />
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <div css={s.inputSubmitRow}>
            <button css={stylizedButton(theme)}>Argue for this</button>
            <button css={stylizedButton(theme)}>Argue against this</button>
          </div>
        </>
      }
    </>
  )
}
