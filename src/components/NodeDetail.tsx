/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import range from 'lodash/range'
import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'
import { NodeUserInput } from './NodeUserInput'
import CollapsibleSection from './CollapsibleSection'
import Media from './Media'
import { getMedia } from '../firestore/firestore'

export const NodeDetail = observer(
  ({ nodeId, currentPhrasingIndex, setCurrentPhrasingIndex, numPhrasings, terms, references, media, sources }) => {
    const theme: Theme = useTheme()
    const s = styles(theme)
    const resolvedMedia = getMedia(media?.id)

    return (
      <>
        <CollapsibleSection title={'Phrasing'} contentExists={numPhrasings > 1}>
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
        </CollapsibleSection>

        <CollapsibleSection title={'Definitions'} contentExists={terms.length > 0}>
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
        </CollapsibleSection>

        <CollapsibleSection title={'Media'} contentExists={media?.id && resolvedMedia}>
          <Media {...resolvedMedia} />
        </CollapsibleSection>

        <CollapsibleSection title={'Sources'} contentExists={sources || references}>
          <>
            <h4>Sources</h4>
            {sources?.length &&
              sources.map((item) => (
                <a href={item?.link} target="_blank">
                  {item?.link}
                </a>
              ))}
            {references?.sourceChains?.[0]?.sources?.length &&
              references?.sourceChains?.[0]?.sources.map((item) => (
                <a href={item.link} target="_blank">
                  {item.link}
                </a>
              ))}
          </>
        </CollapsibleSection>

        <CollapsibleSection contentExists={true}>
          <NodeUserInput nodeId={nodeId} />
        </CollapsibleSection>
      </>
    )
  },
)
