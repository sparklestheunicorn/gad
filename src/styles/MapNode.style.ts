import { css } from '@emotion/core'

export const mapQuestion = (theme) =>
  css({
    label: 'mapQuestion',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    marginBottom: theme.spacing.M,
    backgroundColor: '#fff',
    borderRadius: `${theme.spacing.XS}`,
    cursor: 'pointer',
    div: {
      display: 'inline-block',
      verticalAlign: 'bottom',
    },
  })

export const mapNode = (theme) => ({
  label: 'mapNode',
  position: 'unset',
  width: '100%',
  zIndex: '10',
  padding: `${theme.spacing.S} ${theme.spacing.L} ${theme.spacing.S} ${theme.spacing.S}`,
  marginBottom: theme.spacing.M,
  cursor: 'pointer',
  //border: `1px solid ${theme.color.border}`,
  WebkitFontSmoothing: 'antialiased',
  h4: {
    fontFamily: theme.font.paragraph,
  },
})

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
  animationFillMode: 'forwards',
})

export const expanded = (isExpanded) =>
  isExpanded
    ? css({
        label: 'expanded',
        fontWeight: 'bold',
      })
    : {}

export const canExpand = (hasChildren, theme) =>
  hasChildren
    ? css({
        label: 'canExpand',
        '&:before': {
          content: '"+"',
          position: 'absolute',
          top: theme.spacing.S,
          right: theme.spacing.S,
          fontSize: theme.textSize.M,
          lineHeight: theme.textSize.M,
        },
      })
    : {}

export const selectedAndCanExpand = (isExpanded, hasChildren, theme) =>
  isExpanded && hasChildren
    ? css({
        '&:before': {
          content: '"▻"',
          position: 'absolute',
          right: 0,
          fontWweight: 'bold',
          fontSize: theme.textSize.M,
          lineHeight: `calc(${theme.textSize.M} - 3px)`,
          transform: 'scalex(0.5)',
        },
      })
    : {}

export const rectangle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
}

export const title = (theme) =>
  css({
    label: 'mapQuestionTitle',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: theme.textSize.S,
    fontFamily: theme.font.paragraph,
    margin: `0 0 0 ${theme.spacing.M}`,
    paddingRight: theme.spacing.M,
  })
