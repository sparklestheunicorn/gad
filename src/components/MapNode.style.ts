import { css } from '@emotion/core'

const rectangle = (theme) =>
  css({
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius,
  })

const liBase = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
}

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
      paddingRight: theme.spacing.S,
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
      padding: theme.spacing.S,
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
  showingChildren: css(icon(theme), {
    label: 'showingChildren',
    fontSize: theme.textSize.XS,
  }),
  questionTitle: css({
    label: 'mapQuestionTitle',
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.textSize.S,
    fontFamily: theme.font.paragraph,
    margin: `0 0 0 ${theme.spacing.M}`,
    paddingRight: theme.spacing.M,
    paddingTop: theme.spacing.S,
    paddingBottom: theme.spacing.S,
    flexGrow: 2,
  }),
  nodeTitle: {
    fontFamily: theme.font.paragraph,
    marginRight: theme.spacing.S,
    flexGrow: 2,
  },
})
