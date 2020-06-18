/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import range from 'lodash/range'
import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { NodeUserInput } from './NodeUserInput'
import { styles } from './NodeDetail.style'
import { getMedia } from '../firestore/firestore'

export const NodeDetail = observer(
  ({ nodeId, currentPhrasingIndex, setCurrentPhrasingIndex, numPhrasings, terms, references, media, sources }) => {
    const theme: Theme = useTheme()
    const s = styles(theme)

    const resolvedMedia = getMedia(media?.id)

    const getYoutubeId = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return match && match[2].length === 11 ? match[2] : null
    }

    const renderMedia = ({ type, url, description, name }) => {
      switch (type) {
        case 10: {
          //type 10 is an image
          return (
            <>
              <p>{name}</p>
              <img src={url} alt={description} />
            </>
          )
        }
        case 20: {
          //type 20 is a youtube video

          const videoId = getYoutubeId(url)

          return (
            <>
              <p>{name}</p>
              <iframe
                css={s.iframe}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </>
          )
        }
      }
    }

    return (
      <>
        {numPhrasings > 1 && (
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
        )}
        {terms.length > 0 && (
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
        {media?.id && (
          <>
            <h4>Media</h4>
            {resolvedMedia && renderMedia(resolvedMedia)}
          </>
        )}
        {(sources || references) && (
          //TODO: Probably at some point we want to support multiple source chains and multiple sources
          <>
            <h4>Sources</h4>
            {sources && (
              <a href={sources?.[0]?.link} target="_blank">
                {sources?.[0]?.link}
              </a>
            )}
            {references && (
              <a href={references?.sourceChains?.[0]?.sources?.[0]?.link} target="_blank">
                {references?.sourceChains?.[0]?.sources?.[0]?.link}
              </a>
            )}
          </>
        )}
        <NodeUserInput nodeId={nodeId} />
      </>
    )
  },
)
