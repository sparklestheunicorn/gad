import facepaint from 'facepaint'

const breakpoints = [768, 1024]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

/*
 * Shared Layout
 */

export const maxPageWidth = '1024px'

export const spacing = {
  XXS: '2px',
  XS: '4px',
  S: '8px',
  M: '16px',
  L: '32px',
  XL: '64px'
}

export const roundedCorner1 = '12px'

/*
 * Typography
 */

export const textSize = {
  XXS: '12px',
  XS: '16px',
  S: '24px',
  M: '32px',
  L: '48px',
  XL: '72px'
}

/*
 * Particular Layouts
 */

export const topNavHeight = '64px'

/*
 * Colors
 */

export const color = {
  border: '#d9d9d9',
  textLight: '#1c4c6c',
  textDark: '#1c3749',
  shadow: 'rgba(104, 166, 214, 1)',
  accentLight: '#47ace3',
  accentDark: '#317072',
  bgDarkBlue: 'rgba(104, 166, 214, 1)',
  bgLightBlue: 'rgba(188, 217, 240, 1)',
  bezelTop: '#eee',
  bezelRight: '#ddd',
  bezelBottom: '#ccc',
  bezelLeft: '#e5e5e5',
  knockoutBackground: '#136494'
}

/*
 *  UI Element Styling
 */

export const circleDiameter = {
  S: '55px',
  M: '112px',
  L: '262px'
}

/*
 * Animations
 */

export const mapMovementTransitionSpeed = '0.8s'
