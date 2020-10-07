import { css } from '@emotion/core'

export const styles = (theme) => ({
  pageWelcome: css(
    theme.mq({
      backgroundImage: [
        `url('${process.env.REACT_APP_WELCOME_BACKGROUND_IMAGE_MOBILE}')`,
        `url('${process.env.REACT_APP_WELCOME_BACKGROUND_IMAGE_MOBILE}')`,
        `url('${process.env.REACT_APP_WELCOME_BACKGROUND_IMAGE}')`,
      ],
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: '100%',
      backgroundPositionY: ['105%', '105%', '50%'],
      backgroundSize: ['100%', '100%', '600px'],
      paddingBottom: [0, 0, '150px'],
    }),
  ),
  welcomeQuote: theme.mq({
    width: ['100%', '100%', '50%'],
    minWidth: ['100%', '100%', '550px'],
    padding: ['20px 60px 0 60px', '20px 60px 0 60px', '50px 20px 20px 100px'],
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
    p: {
      fontFamily: 'Glacial Indifference',
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
    display: ['none', 'none', 'flex'],
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
    img: {
      width: '50px',
      marginRight: '16px',
    },
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
  viewCTALink: theme.mq({
    textAlign: ['center', 'center', 'left'],
    margin: [0, 0, '0 0 0 100px'],
  }),
  viewCTAButton: theme.mq({
    margin: ['20px auto', '20px auto', '40px 0 0 0'],
  }),
})
