/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import range from 'lodash/range'
import get from 'lodash/get'
import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './NodeDetail.style'
import { NodeUserInput } from './NodeUserInput'
import CollapsibleSection from './CollapsibleSection'
import Term from './Term'
import Media from './Media'

const SourceLink = ({ link }) => (
  <a href={link} target="_blank">
    {link}
  </a>
)

export const NodeDetail = observer(
  ({ nodeId, currentPhrasingIndex, setCurrentPhrasingIndex, numPhrasings, terms, media, sources, note, open }) => {
    const theme: Theme = useTheme()
    const s = styles(theme)

    return (
      <div css={s.detailView(open)}>
        <CollapsibleSection title={'Select Phrasing'} contentExists={numPhrasings > 1}>
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

        <CollapsibleSection title={'See Definitions'} contentExists={terms.length > 0}>
          {terms.map((term, i) => (
            <Term key={`${nodeId}-term-${i}`} {...term} />
          ))}
        </CollapsibleSection>

        <CollapsibleSection title={'Explain More'} contentExists={note}>
          <div>{note}</div>
        </CollapsibleSection>

        <CollapsibleSection title={'View Media'} contentExists={media}>
          <Media {...media} />
        </CollapsibleSection>

        <CollapsibleSection title={'View Sources'} contentExists={sources && sources?.length}>
          {sources.map((link, i) => (
            <SourceLink key={`${nodeId}-source-${i}`} link={link} />
          ))}
        </CollapsibleSection>

        <CollapsibleSection title={'Weigh In'} contentExists={true}>
          <NodeUserInput nodeId={nodeId} />
        </CollapsibleSection>
      </div>
    )
  },
)
