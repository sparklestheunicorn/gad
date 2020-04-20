import { css } from '@emotion/core'
import { mq } from '../styles/App.styles'

export const mapMovementTransitionSpeed = '0.8s'
export const mapFooterHeight = '32px'
export const mapHeaderHeight = '120px'

export const slideToDepth = (depth) =>
  mq({
    label: 'slideToDepth',
    transform: [
      `translate3d(${-80 * depth}%, 0, 0)`,
      `translate3d(${-40 * depth + 4}%, 0, 0)`,
      `translate3d(${-40 * depth + 4}%, 0, 0)`,
    ],
    transition: 'transform 1s ease',
    WebkitFontSmoothing: 'antialiased',
  })

export const map = (theme) => ({
  label: 'map',
  height: `calc(100% - ${mapHeaderHeight} - ${mapFooterHeight})`,
  paddingBottom: `${mapFooterHeight}`,
  opacity: 0,
  animationName: 'fade-in',
  animationDuration: '1s',
  animationFillMode: 'forwards',
  overflowX: 'hidden',
  titleBlock: {
    background: 'transparent',
  },
})

export const topContainer = (theme) => ({
  label: 'top-container',
  padding: `${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.L} ${theme.spacing.M}`,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  height: mapHeaderHeight,
  img: {
    maxWidth: '350px',
  },
})

export const mapContainer = {
  label: 'mapContainer',
  transition: `transform ${mapMovementTransitionSpeed}`,
  WebkitFontSmoothing: 'antialiased',
  paddingBottom: mapFooterHeight,
}

export const mapFooter = css({
  label: 'mapFooter',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: mapFooterHeight,
})
