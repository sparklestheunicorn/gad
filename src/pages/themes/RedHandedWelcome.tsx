/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../styles/themes/Theme.type'
import { styles } from './RedHandedWelcome.style'
import { fontPreloader, page, subheading, stylizedButton, dropShadow } from '../../styles/shared.style'

import { PageEffects } from '../../components/PageEffects'

export const RedHandedWelcome = (props) => {
  const theme: Theme = useTheme()
  const s = styles(theme)

  return (
    <section className="page" css={[page(theme), s.page]}>
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <div css={fontPreloader(theme)}>
        <span>Load</span> <span>the</span> <span>fonts</span>
      </div>
      <div css={s.topContainer}>
        <img css={s.titleImage} src={theme.image.title} alt={theme.strings.tagline} />
      </div>
      <div css={s.bottomContainer}>
        <Link to="/map" css={[stylizedButton(theme), dropShadow(theme), s.exploreButton]}>
          Explore
        </Link>

        <div css={s.welcomeAnimation}>
          <div css={s.animationContainer}>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative, s.reversed]}></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative]}></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative, s.reversed]}></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative]}></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative]}></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative]}></div>
            </div>
            <div css={s.speechBubbleContainer}>
              <div css={[s.speechBubble, s.decorative]}></div>
            </div>
          </div>
          <div css={s.animationContainer}>
            <div css={s.shadow}></div>
            <div css={s.shadow}></div>
            <div css={s.shadow}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
