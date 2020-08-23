import { css } from '@emotion/core'
import { fadeIn } from '../styles/keyframes'

export const mapMovementTransitionSpeed = '0.8s'
export const mapFooterHeight = '32px'
export const mapHeaderHeight = '100px'

export const styles = (theme) => ({
  page: {
    height: '100%',
  },
  slideToDepth: (depth: number) =>
    theme.mq({
      label: 'slideToDepth',
      transform: [
        `translate3d(${-80 * depth}%, 0, 0)`,
        `translate3d(${-40 * depth + 4}%, 0, 0)`,
        `translate3d(${-40 * depth + 4}%, 0, 0)`,
      ],
      transition: 'transform 1s ease',
      WebkitFontSmoothing: 'antialiased',
    }),
  mapContainer: css({
    label: 'mapContainer',
    height: `calc(100% - ${mapHeaderHeight} - ${mapFooterHeight})`,
    paddingBottom: `${mapFooterHeight}`,
    opacity: 0,
    animationName: fadeIn,
    animationDuration: '1s',
    animationFillMode: 'forwards',
    transition: `transform ${mapMovementTransitionSpeed}`,
    WebkitFontSmoothing: 'antialiased',
    overflowX: 'hidden',
    titleBlock: {
      background: 'transparent',
    },
    backgroundImage: [
      `url('${process.env.REACT_APP_WELCOME_BACKGROUND_IMAGE_MOBILE}')`,
      `url('${process.env.REACT_APP_WELCOME_BACKGROUND_IMAGE_MOBILE}')`,
      `url('${process.env.REACT_APP_WELCOME_BACKGROUND_IMAGE}')`,
    ],
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '100%',
    backgroundPositionY: ['105%', '105%', '50%'],
    backgroundSize: ['100%', '100%', '600px'],
  }),
  topContainer: {
    label: 'top-container',
    padding: theme.spacing.M,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: mapHeaderHeight,
    img: {
      maxWidth: '350px',
      width: theme.layout.topImageWidth,
    },
  },
  mapFooter: css({
    label: 'mapFooter',
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    height: mapFooterHeight,
  }),
})
