import facepaint from 'facepaint'

const breakpoints = [768, 1024]
export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export const defaultStyles = {
  mq,
  color: {
    background: '#fff',
    textColor: '#ccc',
    knockoutBackground: '#999',
    shadow: '#d4d5d6',
    border: '#d4d5d6',
    borderDark: '#000',
  },
  textSize: {
    XXS: '12px',
    XS: '16px',
    S: '24px',
    M: '32px',
    L: '48px',
    XL: '72px',
  },
  spacing: {
    XXS: '2px',
    XS: '4px',
    S: '8px',
    M: '16px',
    L: '32px',
    XL: '64px',
  },
  layout: {
    maxPageWidth: '1024px',
    topNavHeight: '64px',
  },
  shape: {
    roundedCorner: '12px',
    circleDiameter: {
      S: '55px',
      M: '112px',
      L: '262px',
    },
  },
  font: {
    heading: 'sans-serif',
    subheading: 'sans-serif',
    paragraph: 'PT Sans, sans-serif',
  },
  animation: {
    mapMovementTransitionSpeed: '0.8s',
  },
}
