/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faThumbsUp, faThumbsDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeUserInput.style'
import { stylizedButton, dropShadow } from '../styles/shared.style'

export const NodeUserInput = () => {
  const MIN_ITEM_LENGTH = 40

  const theme: Theme = useTheme()
  const s = styles(theme)

  const [inputIsExpanded, setInputIsExpanded] = React.useState(false)

  const [inputItems, setInputItems] = React.useState([''])
  const [currentInputItem, setCurrentInputItem] = React.useState('')
  const [currentInputItemIndex, setCurrentInputItemIndex] = React.useState(0)
  const [inputHeight, setInputHeight] = React.useState(0) //We need this to get the textarea to expand to match its <p> size.

  const textareaRef = React.useRef(null)

  React.useEffect(() => {
    if (!textareaRef || !textareaRef.current) return
    setInputHeight(textareaRef.current.scrollHeight)
  }, [currentInputItem, currentInputItemIndex])

  const inputTextChanged = (event) => {
    setCurrentInputItem(event.target.value)
  }

  const createNewInputItem = () => {
    if (currentInputItem.length < MIN_ITEM_LENGTH) {
      //Show a requirements message
      return
    }
    setInputItems(inputItems.concat(currentInputItem))
    setCurrentInputItem('')
  }

  const changeCurrentInputItemIndex = (itemIndex) => {
    if (currentInputItemIndex === 0) {
      createNewInputItem()
    } else {
      let updatedInputItems = inputItems.slice()
      if (currentInputItem === '') {
        updatedInputItems.splice(currentInputItemIndex, 1)
      } else {
        updatedInputItems[currentInputItemIndex] = currentInputItem
      }
      setInputItems(updatedInputItems)
    }

    setCurrentInputItem(inputItems[itemIndex])
    setCurrentInputItemIndex(itemIndex)
  }

  return (
    <>
      <h4
        onClick={() => {
          setInputIsExpanded(!inputIsExpanded)
        }}
      >
        Send us your input and evidence{' '}
        {inputIsExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </h4>
      {inputIsExpanded && (
        <>
          <p>Try to break your argument into simple, small pieces. Include links to sources where possible.</p>
          {inputItems.map((item, itemIndex) => {
            if (itemIndex === currentInputItemIndex) {
              return (
                <>
                  <div key={itemIndex} css={s.newInputItemContainer}>
                    <textarea
                      ref={textareaRef}
                      placeholder="I think that..."
                      onChange={(event) => {
                        inputTextChanged(event)
                      }}
                      value={currentInputItem}
                      style={{ height: inputHeight }}
                    />
                    {currentInputItem.length > MIN_ITEM_LENGTH &&
                      (inputItems.indexOf('') === itemIndex || !inputItems.includes('')) && (
                        <button css={s.newInputItemButton} onClick={createNewInputItem}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      )}
                  </div>
                </>
              )
            } else {
              return (
                <p
                  onClick={() => {
                    changeCurrentInputItemIndex(itemIndex)
                  }}
                  css={[s.inputItem, dropShadow(theme)]}
                  key={itemIndex}
                >
                  {item || 'I think that...'}
                </p>
              )
            }
          })}
          <div css={s.inputSubmitRow}>
            <button css={stylizedButton(theme)}>
              <FontAwesomeIcon icon={faThumbsUp} /> Argue for
            </button>
            <button css={stylizedButton(theme)}>
              <FontAwesomeIcon icon={faThumbsDown} /> Argue against
            </button>
          </div>
        </>
      )}
    </>
  )
}
