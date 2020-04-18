import { css } from '@emotion/core'
import { mq, mapMovementTransitionSpeed } from './variables'

export const mapFooterHeight = '32px'

export const slideToDepth = depth => (mq({
  label: 'moveToLevel',
  transform: [
    `translateX(${-80 * depth + 4}%)`,
    `translateX(${-40 * depth + 4}%)`,
    `translateX(${-40 * depth + 4}%)`,
  ]
}))

export const map = {
  label: 'map',
  opacity: 0,
  animationName: 'fade-in',
  animationDuration: '1s',
  animationFillMode: 'forwards',
}

export const mapContainer = {
  label: 'mapContainer',
  transition: `transform ${mapMovementTransitionSpeed}`,
  paddingBottom: mapFooterHeight
}

export const mapFooter = css({
  label: 'mapFooter',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: mapFooterHeight
})

// shared 

export const mapNodeChildren = css({
  label: 'nodeChildren',
  position: 'absolute',
  left: '100%',
  top: 0,
  listStyleType: 'none',
  width: '100%',
  height: '100%',
  opacity: 0,
  animationName: 'fade-in',
  animationDelay: '0.4s',
  animationDuration: '1s',
  animationFillMode: 'forwards'
})