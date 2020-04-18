import { css } from '@emotion/core'
import { textSize, spacing } from "./variables";

export const mapNode = {
  label: 'mapNode',
  position: 'unset',
  width: '100%',
  padding: `${spacing.S} ${spacing.L} ${spacing.S} ${spacing.S}`,
  marginBottom: spacing.M,
  cursor: 'pointer',
}

export const expanded = isExpanded => (
  isExpanded ? css({
    label: 'expanded',
    fontWeight: 'bold',
  }) : {}
)

export const canExpand = hasChildren => (
  hasChildren ? css({
    label: 'canExpand',
    '&:before': {
      content: '"+"',
      position: 'absolute',
      top: spacing.S,
      right: spacing.S,
      fontSize: textSize.M,
      lineHeight: textSize.M
    }
  }) : {}
)

export const selectedAndCanExpand = (isExpanded, hasChildren) => (
  isExpanded && hasChildren ? css({
    '&:before': {
      content: '"▻"',
      position: 'absolute',
      right: 0,
      fontWweight: 'bold',
      fontSize: textSize.M,
      lineHeight: `calc(${textSize.M} - 3px)`,
      transform: 'scalex(0.5)'
    }
  }) : {}
)

export const rectangle = {
  backgroundColor: '#fff',
  borderRadius: '8px'
}