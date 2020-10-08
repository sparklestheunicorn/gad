import { css } from '@emotion/core'
import merge from 'lodash/merge'
import { twinkle, fadeInDelayed, flyInBottomWithShadow, fadeIn } from '../../styles/keyframes'

const welcomeAnimationDuration = '1.5s'
const starFadeInDelay = '2.5s'
const starFadeInDuration = '6s'
const twinkleAnimationDuration = '2s'

const speechBubbleChild = (top, right, animationDelay, transform) => ({
  top,
  right,
  animationDelay,
  '& div': {
    transform,
  },
})

const shadowChild = (width, right, bottom) => ({
  width,
  right,
  bottom,
})

const starChild = (top, right, animationDelay) => ({
  top,
  right,
  '& div': {
    animationDelay,
  },
})

export const styles = (theme) => ({
  page: {
    height: `calc(100vh - ${theme.layout.topNavHeight})`,
  },
  topContainer: css({
    label: 'topContainer',
    flex: '0 0 auto',
    padding: `0 ${theme.spacing.M}`,
    zIndex: 10,
    'h1, h2': {
      maxWidth: '100%',
      textAlign: 'center',
    },
  }),
  titleImage: {
    label: 'titleImage',
    marginTop: theme.spacing.L,
    maxWidth: '500px',
    width: '100%',
  },
  exploreButton: theme.mq({
    label: 'exploreButton',
    marginTop: '30vh',
    alignSelf: 'start',
    left: [null, null, '30%'],
  }),
  bottomContainer: css({
    label: 'bottomContainer',
    position: 'relative',
    zIndex: 1,
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0 ${theme.spacing.M}`,
  }),
  welcomeAnimation: theme.mq({
    label: 'welcomeAnimation',
    position: 'absolute',
    width: '60%',
    height: '100%',
    right: [0, '15%', '15%'],
    bottom: '0',
  }),
  animationContainer: css({
    label: 'animationContainer',
    position: 'absolute',
    height: '100%',
    width: '100%',
  }),
  speechBubbleContainer: css({
    label: 'speechBubbleContainer',
    position: 'absolute',
    animationName: flyInBottomWithShadow(theme),
    animationDuration: welcomeAnimationDuration,
    animationFillMode: 'forwards',
    willChange: 'transform',
    transform: 'translateY(100vh)',
    '&:nth-child(1)': speechBubbleChild('-5%', '5%', '0s', 'scale(0.3)'),
    '&:nth-child(2)': speechBubbleChild('5%', '30%', '0.1s', 'scale(0.2)'),
    '&:nth-child(3)': speechBubbleChild('20%', '40%', '0.2s', 'scale(0.75)'),
    '&:nth-child(4)': speechBubbleChild('20%', '-15%', '0.3s', 'scale(0.5)'),
    '&:nth-child(5)': speechBubbleChild('50%', '-16%', '0.4s', 'scale(0.8)'),
    '&:nth-child(6)': speechBubbleChild('35%', '10%', '0.5s', 'scale(0.6)'),
    '&:nth-child(7)': speechBubbleChild('65%', '40%', '0.6s', 'none'),
  }),
  speechBubble: css({
    label: 'speechBubble',
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#fff',
    borderRadius: theme.shape.roundedCorner,
    padding: theme.spacing.L,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      borderTop: '24px solid #fff',
      borderRight: '36px solid transparent',
    },
  }),
  reversed: {
    label: 'reversed',
    ':after': {
      borderRight: 'none',
      borderLeft: '36px solid transparent',
    },
  },
  decorative: {
    label: 'decorative',
    height: '120px',
    width: '140px',
  },
  shadow: theme.mq({
    label: 'shadow',
    position: 'absolute',
    height: 0,
    zIndex: -100,
    opacity: 0,
    boxShadow: `0 0 10px 3px ${theme.color.shadow}`,
    animationName: fadeInDelayed,
    animationDuration: welcomeAnimationDuration,
    animationFillMode: 'forwards',
    animationDelay: '0.5s',
    willChange: 'transform',
    '&:nth-child(1)': shadowChild(['50%', '23%', '40%'], ['50%', '11%', '29%'], '7px'),
    '&:nth-child(2)': shadowChild(['30%', '30%', '26%'], ['50%', '50%', '-16%'], ['4%', '4%', '1%']),
    '&:nth-child(3)': shadowChild('30%', ['40%', '40%', '10%'], '3%'),
  }),
  starContainer: theme.mq({
    label: 'starContainer',
    position: 'absolute',
    display: 'inline-block',
    opacity: 0,
    animationName: fadeIn,
    animationFillMode: 'forwards',
    animationDuration: starFadeInDuration,
    animationDelay: starFadeInDelay,
    '&:nth-child(1)': starChild('-10%', '30%', 0),
    '&:nth-child(2)': merge(starChild('-0%', ['15%', '15%', '60%'], '1s'), {
      welcomeAnimation: {
        right: '15%',
      },
      '& div': {
        animationDuration: '1.5s',
      },
    }),
    '&:nth-child(3)': starChild('20%', '38%', '0.2s'),
    '&:nth-child(4)': merge(starChild('45%', '10%', '0.7s'), {
      '& div': {
        animationDuration: '1.5s',
      },
    }),
    '&:nth-child(5)': starChild('55%', '75%', '0.5s'),
  }),
  star: css({
    label: 'star',
    animationName: twinkle,
    animationFillMode: 'forwards',
    animationDuration: twinkleAnimationDuration,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease',
    position: 'absolute',
    display: 'inline-block',
    width: 0,
    height: 0,
    zIndex: 10,
    marginLeft: '0.9em',
    marginRight: '0.9em',
    marginBottom: '1.2em',
    borderRight: '0.3em solid transparent',
    borderBottom: '0.7em solid #fff',
    borderLeft: '0.3em solid transparent',
    // Controlls the size of the stars.
    fontSize: '12px',

    '&:before, &:after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 0,
      position: 'absolute',
      top: '0.6em',
      left: '-1em',
      borderRight: '1em solid transparent',
      borderBottom: '0.7em solid #fff',
      borderLeft: '1em solid transparent',
      transform: 'rotate(-35deg)',
    },

    '&:after': {
      transform: 'rotate(35deg)',
    },
  }),
})
