import facepaint from 'facepaint'

const breakpoints = [768, 1024]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)