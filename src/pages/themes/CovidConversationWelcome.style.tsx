import { css } from '@emotion/core'

export const styles = {
  pageWelcome: css({
    backgroundImage: 'url("../../assets/images/covid-conversation-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '100%',
    backgroundPositionY: '50%',
    backgroundSize: '600px',
  }),
  welcomeQuote: {
    width: '50%',
    minWidth: '550px',
    padding: '20px 20px 20px 100px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    h2: {
      fontSize: '48px',
      lineHeight: '64px',
      color: '#000',
      letterSpacing: '-1px',
      span: {
        display: 'inline',
        color: '#064b6e',
      },
    },
  },
}
  .page.welcome {

  topContainer: {
    width: '50%',
    minWidth: '550px',
    paddingTop: '48px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  titleImage: {
    maxWidth: '100%'
  }

    bottomContainer {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      background: 'none',
      paddingTop: '50px',
      backgroundColor: 'transparent', // rgba(255, 255, 255, 0.8);

      a,
      div {
        minWidth: '100px'
      }

      donateCtaLink: {
        minWidth: '250px'
      }

      img: {
        width: '100px',
      }
    }

    .donate-cta-link {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: $text-size-s;

      img {
        vertical-align: bottom;
      }

      span {
        height: auto;
        font-size: $text-size-xs;
      }
    }

    .map-cta {
      margin-right: 10px;
      animation-name: pulsate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    @media only screen and (max-width: $tablet-width) {
      .top-container {
        width: 100%;
        min-width: 100%;
        padding: 20px;
      }

      .welcome-quote {
        width: 100%;
        min-width: 100%;
        padding-right: 40px;

        h2 {
          font-size: 48px;
          line-height: 50px;
        }
      }

      .bottom-container {
        padding: 20px;

        div {
          min-width: 50px;
        }

        img {
          width: 50px;
        }
      }
    }
  }
}