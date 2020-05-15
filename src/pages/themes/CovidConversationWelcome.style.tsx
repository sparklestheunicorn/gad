import { css } from '@emotion/core'

export const styles = (theme) => ({
  pageWelcome: css({
    backgroundImage: 'url("../../assets/images/covid-conversation-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '100%',
    backgroundPositionY: '50%',
    backgroundSize: '600px',
  }),
  welcomeQuote: theme.mq({
    width: ['100%', '100%', '50%'],
    minWidth: ['100%', '100%', '550px'],
    padding: ['20px 40px 20px 100px', '20px 40px 20px 100px', '20px 20px 20px 100px'],
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    h2: {
      fontSize: '48px',
      lineHeight: ['50px', '50px', '64px'],
      color: '#000',
      letterSpacing: '-1px',
      span: {
        display: 'inline',
        color: '#064b6e',
      },
    },
  }),
  topContainer: theme.mq({
    width: ['100%', '100%', '50%'],
    minWidth: ['100%', '100%', '550px'],
    padding: ['20px', '20px', '48px 0 0 0'],
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  }),
  titleImage: {
    maxWidth: '100%',
  },
  bottomContainer: theme.mq({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'none',
    padding: ['20px 50px 50px 50px', '20px 50px 50px 50px', '50px'],
    backgroundColor: 'transparent', // rgba(255, 255, 255, 0.8);
    a: {
      minWidth: '100px',
    },
    div: theme.mq({
      minWidth: ['50px', '50px', '100px'],
    }),
    img: theme.mq({
      width: ['50px', '50px', '100px'],
    }),
  }),
  donateCTALink: css({
    display: 'flex',
    minWidth: '250px',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.textSize.S,
    img: {
      verticalAlign: 'bottom',
    },
    span: {
      height: 'auto',
      fontSize: theme.textSize.XS,
    },
  }),
  mapCTA: {
    marginRight: '10px',
    animationName: 'pulsate',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
})
