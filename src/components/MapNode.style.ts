import { css } from '@emotion/core'

const rectangle = (theme) =>
  css({
    backgroundColor: '#fff',
    borderRadius: `${theme.spacing.XS}`,
  })

export const mapQuestion = (theme) => [
  rectangle(theme),
  css({
    label: 'mapQuestion',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.M,
    cursor: 'pointer',
  }),
]

export const mapNode = (theme) => [
  rectangle(theme),
  {
    label: 'mapNode',
    position: 'unset',
    width: '100%',
    zIndex: '10',
    padding: `${theme.spacing.S} ${theme.spacing.L} ${theme.spacing.S} ${theme.spacing.S}`,
    marginBottom: theme.spacing.M,
    cursor: 'pointer',
    WebkitFontSmoothing: 'antialiased',
  },
]

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

export const questionTitle = (theme) =>
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

export const nodeTitle = (theme) => ({
  fontFamily: theme.font.paragraph,
})
