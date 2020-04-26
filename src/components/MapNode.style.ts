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
  questionTitle: (detailViewOpen) =>
    css({
      label: 'mapQuestionTitle',
      display: 'flex',
      fontSize: theme.textSize.S,
      fontFamily: theme.font.paragraph,
      padding: `${theme.spacing.S} ${theme.spacing.M}`,
      margin: 0,
      flexGrow: 2,
      borderBottom: detailViewOpen ? `2px solid ${theme.color.border}` : 'none',
      animationName: 'fade-in',
      animationDelay: '0.4s',
      animationDuration: '1s',
    }),
  nodeTitle: (detailViewOpen) => ({
    fontFamily: theme.font.paragraph,
    flexGrow: 2,
    padding: theme.spacing.S,
    margin: 0,
    borderBottom: detailViewOpen ? `2px solid ${theme.color.border}` : 'none',
    animationName: 'fade-in',
    animationDelay: '0.4s',
    animationDuration: '1s',
  }),
  detailToggle: (hasDetails) =>
    css({
      label: 'detailToggle',
      color: hasDetails ? theme.color.textLight : theme.color.border,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      fontSize: theme.textSize.S,
      borderTop: `2px solid ${theme.color.border}`,
      borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
    }),
  liHeader: (hasDetails) =>
    css({
      label: 'liHeader',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      borderRadius: hasDetails ? `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0` : theme.shape.borderRadius,
    }),
  detailView: (detailViewOpen) =>
    css({
      label: 'detailView',
      maxHeight: detailViewOpen ? '50vh' : '0',
      padding: detailViewOpen ? theme.spacing.M : 0,
      overflowY: detailViewOpen ? 'hidden' : 'auto',
      transition: 'max-height 1s ease',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.font.paragraph,
    }),
})
