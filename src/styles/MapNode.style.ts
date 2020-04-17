import { textSize, spacing } from "./variables";

export const nodeChildren = {
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
}

export const mapNode = {
  label: 'mapNode',
  position: 'unset',
  width: '100%',
  padding: `${spacing.S} ${spacing.L} ${spacing.S} ${spacing.S}`,
  marginBottom: spacing.M,
  cursor: 'pointer',
}

export const expanded = {
  label: 'expanded',
  fontWeight: 'bold'
}

export const canExpand = {
  label: 'canExpand',
  '&:before': {
    content: '+',
    position: 'absolute',
    top: spacing.S,
    right: spacing.S,
    fontSize: textSize.M,
    lineHeight: textSize.M
  },

  '&.can-expand.expanded:before': {
    content: '▻',
    position: 'absolute',
    right: 0,
    fontWweight: 'bold',
    fontSize: textSize.M,
    lineHeight: `calc(${textSize.M} - 3px)`,
    transform: 'scalex(0.5)'
  }
}