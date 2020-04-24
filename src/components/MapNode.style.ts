import { css } from '@emotion/core'

const rectangle = (theme) =>
  css({
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius,
  })

const liBase = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
})

const icon = (theme) => ({
  color: theme.color.textLight,
})

export const styles = (theme) => ({
  mapQuestion: [
    liBase,
    rectangle(theme),
    css({
      label: 'mapQuestion',
      position: 'relative',
      marginBottom: theme.spacing.M,
    }),
  ],
  mapNode: [
    liBase,
    rectangle(theme),
    css({
      label: 'mapNode',
      position: 'unset',
      width: '100%',
      zIndex: 10,
      marginBottom: theme.spacing.M,
      WebkitFontSmoothing: 'antialiased',
    }),
  ],
  mapNodeChildren: css({
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
  }),
  canExpand: css([
    icon(theme),
    {
      label: 'canExpand',
      fontSize: theme.textSize.M,
      marginTop: '-5px',
    },
  ]),
  expanded: css(icon(theme), {
    label: 'expanded',
    fontSize: theme.textSize.XS,
  }),
  questionTitle: css({
    label: 'mapQuestionTitle',
    display: 'flex',
    fontSize: theme.textSize.S,
    fontFamily: theme.font.paragraph,
    padding: `${theme.spacing.S} ${theme.spacing.M}`,
    margin: 0,
    flexGrow: 2,
    borderBottom: `2px solid ${theme.color.border}`,
  }),
  nodeTitle: {
    fontFamily: theme.font.paragraph,
    flexGrow: 2,
    padding: theme.spacing.S,
  },
  detailViewOpen: {
    height: '75vh',
  },
  detailToggle: css([
    icon(theme),
    {
      label: 'detailToggle',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      fontSize: theme.textSize.S,
      borderTop: `2px solid ${theme.color.border}`,
      borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
    },
  ]),
  mainLiSection: css({
    label: 'mainLiSection',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  }),
})
