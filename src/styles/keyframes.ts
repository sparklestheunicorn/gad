import { keyframes } from '@emotion/core'

export const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: '1',
  },
})

export const twinkle = keyframes({
  '0%': {
    transform: 'scale(1) translateY(0)',
  },

  '40%': {
    transform: 'scale(1) translateY(0)',
  },

  '50%': {
    transform: 'scale(1.3) translateY(-25%)',
  },

  '60%': {
    transform: 'scale(1) translateY(0)',
  },

  '100%': {
    transform: 'scale(1) translateY(0)',
  },
})

export const fadeInDelayed = keyframes({
  '0%': {
    opacity: 0,
  },

  '50%': {
    opacity: 0,
  },

  '100%': {
    opacity: 1,
  },
})

export const flyInBottomWithShadow = (theme) =>
  keyframes({
    '0%': {
      transform: 'translateY(100vh)',
      filter: 'none',
    },

    '50%': {
      transform: 'translateY(0)',
      filter: 'none',
    },

    '100%': {
      transform: 'translateY(0)',
      filter: `drop-shadow(3px 3px 3px ${theme.color.shadow})`,
    },
  })
