/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapNode } from '../components/MapNode'
import { MapIntro } from '../components/MapIntro'
import { questionList, responsiveFlex } from '../styles/MapQuestions.style'
import { mapIntroContainer } from '../styles/MapIntro.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { getFinalNodeTitle } from '../firestore/firestore'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth, setMaxMapDepth } = props

  const [expandedChild, setExpandedChild] = React.useState(null)

  const theme: Theme = useTheme()

  return (
    <div css={responsiveFlex}>
      <div css={mapIntroContainer(theme)}>
        <MapIntro />
      </div>
      <ul css={questionList}>
        {questions.map((question, questionIndex) => (
          <>
            <MapNode
              nodeId={question._key}
              topLevel={true}
              title={getFinalNodeTitle(question)}
              nodeChildren={questionChildren[questionIndex].childNodes}
              depth={1}
              setMapDepth={setMapDepth}
              setMaxMapDepth={setMaxMapDepth}
              isExpanded={question._key === expandedChild}
              setIsExpanded={() => {
                setExpandedChild(question._key)
              }}
            />
          </>
        ))}
      </ul>
    </div>
  )
}
