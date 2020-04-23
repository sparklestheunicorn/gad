/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../styles/themes/Theme.type'
import { styles } from './CovidConversationWelcome.style'
import { heading } from '../../styles/shared.style'

import { PageEffects } from '../../components/PageEffects'

export const CovidConversationWelcome = (props) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  return (
    <section css={s.pageWelcome}>
      <PageEffects duration={200} animation="fadeOut" options="once" />
      <div className="font-preloader">
        <span>Load</span> <span>the</span> <span>fonts</span>
      </div>
      <div className="top-container">
        <img
          className="title-image"
          src={require(`../../assets/images/${theme.image.titleTransparent}`)}
          alt="The Covid Conversation Map"
        />
      </div>
      <div className="welcome-quote">
        <h2 css={heading(theme)}>
          <span>“</span>A Healthy Society Cannot Have Just One Voice.<span>”</span>
        </h2>
        <p>
          Attributed to Dr. Li Wenliang (李文亮). Li is regarded as the COVID-19 whistleblower who warned China about the
          disease. Although silences by his government, he was later cleared, and is reported to have died of the very
          disease he warned China about.
        </p>
      </div>
      <div className="bottom-container">
        <div>
          <a
            className="donate-cta-link external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://secure.squarespace.com/checkout/donate?donatePageId=5bf21df970a6ad8a5c8e4e9b&ss_cid=fd000cc9-da16-4d66-b1cd-25fa2c35ed8b&ss_cvisit=1586916546423&ss_cvr=6efafd68-89e9-4cbf-ac68-8568f6a9822a%7C1583383895461%7C1585513997862%7C1586916546360%7C12"
          >
            <img className="welcome-cta" src={require(`../../assets/images/${theme.image.donateCTA}`)} alt="Conversations" />
            <span>We're an educational non-profit, please donate!</span>
          </a>
        </div>
        <div>
          <Link to="/map">
            <img
              className="welcome-cta map-cta"
              src={require(`../../assets/images/${theme.image.welcomeCTA}`)}
              alt="Conversations"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
