/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../styles/themes/Theme.type'
import { styles } from './GreatAmericanDebateWelcome.style'
import { page, subheading, stylizedButton, dropShadow } from '../../styles/shared.style'

import { PageEffects } from '../../components/PageEffects'

export const GreatAmericanDebateWelcome = (props) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  return (
    <section css={page(theme)}>
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <div className="font-preloader">
        <span>Load</span> <span>the</span> <span>fonts</span>
      </div>
      <div css={s.topContainer}>
        <img css={s.titleImage} src={require(`../../assets/images/${theme.image.title}`)} alt="The Great American Debate" />
        <h3 css={subheading}>
          <span>america's arguments,</span> <span>all in one place</span>
        </h3>
      </div>
      <div css={s.bottomContainer}>
        <Link to="/debates" css={[stylizedButton, dropShadow, s.exploreButton]}>
          Explore
        </Link>

        <div css={s.welcomeAnimation}>
          <div css={s.animationContainer}>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative reversed"></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative"></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative reversed"></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative"></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative"></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative"></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div className="speech-bubble decorative"></div>
            </div>
          </div>
          <div css={s.animationContainer}>
            <div css={s.shadow}></div>
            <div css={s.shadow}></div>
            <div css={s.shadow}></div>
          </div>
          <div css={s.animationContainer}>
            <div css={s.starContainer}>
              <div css={s.star}></div>
            </div>
            <div css={s.starContainer}>
              <div css={s.star}></div>
            </div>
            <div css={s.starContainer}>
              <div css={s.star}></div>
            </div>
            <div css={s.starContainer}>
              <div css={s.star}></div>
            </div>
            <div css={s.starContainer}>
              <div css={s.star}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
