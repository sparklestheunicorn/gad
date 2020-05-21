/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../styles/themes/Theme.type'
import { styles } from './CovidConversationWelcome.style'
import { page, heading, stylizedButton, knockout } from '../../styles/shared.style'

import { PageEffects } from '../../components/PageEffects'

export const CovidConversationWelcome = (props) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  return (
    <section css={[page(theme), s.pageWelcome]}>
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <div className="font-preloader">
        <span>Load</span> <span>the</span> <span>fonts</span>
      </div>
      <div css={s.topContainer}>
        <img
          css={s.titleImage}
          src={require(`../../assets/images/${theme.image.titleTransparent}`)}
          alt="The Covid Conversation Map"
        />
      </div>
      <div css={s.welcomeQuote}>
        <h2 css={heading(theme)}>
          <span>“</span>A Healthy Society Cannot Have Just One Voice.<span>”</span>
        </h2>
        <p>- Dr. Li Wenliang (李文亮), known as the whistleblower who warned China about COVID-19.</p>
      </div>
      <Link to="/map">
        <button css={[stylizedButton(theme), knockout(theme)]}>View COVID Convos</button>
      </Link>
      <div css={s.bottomContainer}>
        <div>
          <a
            css={s.donateCTALink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://secure.squarespace.com/checkout/donate?donatePageId=5bf21df970a6ad8a5c8e4e9b&ss_cid=fd000cc9-da16-4d66-b1cd-25fa2c35ed8b&ss_cvisit=1586916546423&ss_cvr=6efafd68-89e9-4cbf-ac68-8568f6a9822a%7C1583383895461%7C1585513997862%7C1586916546360%7C12"
          >
            <img src={require(`../../assets/images/${theme.image.donateCTA}`)} alt="Conversations" />
            <span>We're an educational non-profit, please donate!</span>
          </a>
        </div>
        {/*<div>
          <Link to="/map">
            <img css={s.mapCTA} src={require(`../../assets/images/${theme.image.welcomeCTA}`)} alt="Conversations" />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
