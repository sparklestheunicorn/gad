import { color, spacing, textSize, mq } from '../styles/variables'

export const covidConversation = {
  map: {
    backgroundColor: '#fff',
    'h3': {
      fontSize: '24px',
      padding: spacing.S
    },
    titleBlock: {
      background: 'transparent'
    },
    topContainer: {
      padding: '20px',
      height: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    responsiveHeight: mq({
      height: ['100%'] // what for larger?
    })
  },

  questionList: mq({
    width: ['80%', '40%', '40%']
  }),

  question: {
    title: mq({
      fontSize: ['14px', textSize.M, textSize.M],
      marginLeft: [spacing.S, spacing.M, spacing.M]
    })
  },

  mapNode: { // also map-question
    border: `1px solid ${color.border}`,
    zIndex: 10,
    filter: `drop-shadow(3px 3px 3px ${color.shadow})`,

    '&.expanded': {
      border: `1px solid ${color.knockoutBackground}`,
    }
  },

  mapDepthSelector: {
    button: {
      fontSize: textSize.S,
      width: '25%',
      color: color.knockoutBackground,
      backgroundColor: '#fff'
    }
  }
}