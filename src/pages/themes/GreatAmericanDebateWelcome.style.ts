import { css } from '@emotion/core'
import merge from 'lodash/merge'

const welcomeAnimationDuration = '1.5s'
const starFadeInDelay = '2.5s'
const starFadeInDuration = '6s'
const twinkleAnimationDuration = '2s'

const speechBubbleChild = (top, right, animationDelay, transform) => ({
  top,
  right,
  animationDelay,
  speechBubble: {
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
  star: {
    animationDelay,
  },
})

export const styles = (theme) => ({
  topContainer: css({
    flex: '0 0 auto',
    padding: `0 ${theme.spacing.M}`,
    zIndex: 10,
    'h1, h2': {
      maxWidth: '100%',
      textAlign: 'center',
    },
  }),
  titleImage: {
    marginTop: theme.spacing.L,
    maxWidth: '500px',
    width: '100%',
  },
  exploreButton: theme.mq({
    marginTop: '30vh',
    alignSelf: 'start',
    left: [null, null, '30%'],
  }),
  bottomContainer: css({
    position: 'relative',
    zIndex: 1,
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0 ${theme.spacing.M}`,
  }),
  welcomeAnimation: theme.mq({
    position: 'absolute',
    width: '60%',
    height: '100%',
    right: [0, '15%', '15%'],
    bottom: '0',
  }),
  animationContainer: css({
    position: 'absolute',
    height: '100%',
    width: '100%',
  }),
  speechBubbleContainer: css({
    position: 'absolute',
    animationName: 'fly-in-bottom-with-shadow',
    animationDuration: welcomeAnimationDuration,
    animationFillMode: 'forwards',
    willChange: 'transform',
    transform: 'translateY(100vh)',
    '&:nthChild(1)': speechBubbleChild('-5%', '5%', '0s', 'scale(0.3)'),
    '&:nthChild(2)': speechBubbleChild('5%', '30%', '0.1s', 'scale(0.2)'),
    '&:nthChild(3)': speechBubbleChild('20%', '40%', '0.2s', 'scale(0.75)'),
    '&:nthChild(4)': speechBubbleChild('20%', '-15%', '0.3s', 'scale(0.5)'),
    '&:nthChild(5)': speechBubbleChild('50%', '-16%', '0.4s', 'scale(0.8)'),
    '&:nthChild(6)': speechBubbleChild('35%', '-10%', '0.5s', 'scale(0.6)'),
    '&:nthChild(7)': speechBubbleChild('65%', '40%', '0.6s', ''),
  }),
  speechBubble: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#fff',
    borderRadius: theme.shape.roundedCorner,
    padding: theme.spacing.L,

    '&:after': {
      content: '',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      borderTop: '24px solid #fff',
      borderRight: '36px solid transparent',
    },

    '&.reversed:after': {
      borderRight: 'none',
      borderLeft: '36px solid transparent',
    },

    '&.decorative': {
      height: '120px',
      width: '140px',
    },
  },

  shadow: theme.mq({
    position: 'absolute',
    height: 0,
    zIndex: -100,
    opacity: 0,
    boxShadow: `0 0 10px 3px ${theme.color.shadow}`,
    animationName: 'fade-in-delayed',
    animationDuration: welcomeAnimationDuration,
    animationFillMode: 'forwards',
    animationDelay: '0.5s',
    willChange: 'transform',
    '&:nthChild(1)': shadowChild(['50%', '30%', '30%'], ['50%', '11%', '29%'], 0),
    '&:nthChild(2)': shadowChild(['30%', '30%', '26%'], ['50%', '50%', '-16%'], ['4%', '4%', '1%']),
    '&:nthChild(3)': shadowChild('30%', ['40%', '40%', '10%'], '3%'),
  }),
  starContainer: theme.mq({
    position: 'absolute',
    display: 'inline-block',
    opacity: 0,
    animationName: 'fade-in',
    animationFillMode: 'forwards',
    animationDuration: starFadeInDuration,
    animationDelay: starFadeInDelay,
    '&:nthChild(1)': starChild('-10%', '30%', 0),
    '&:nthChild(2)': merge(starChild('-0%', ['15%', '15%', '60%'], '1s'), {
      welcomeAnimation: {
        right: '15%',
      },
      star: {
        animationDuration: '1.5s',
      },
    }),
    '&:nthChild(3)': starChild('20%', '38%', '0.2s'),
    '&:nthChild(4)': merge(starChild('45%', '10%', '0.7s'), {
      star: {
        animationDuration: '1.5s',
      },
    }),
    '&:nthChild(5)': starChild('55%', '75%', '0.5s'),
  }),
  star: css({
    animationName: 'twinkle',
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
      content: '',
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
