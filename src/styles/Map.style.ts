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

export const mapFooter = {
  label: 'mapFooter',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: mapFooterHeight
}