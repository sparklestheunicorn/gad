import { css } from '@emotion/core'
import { Z_BLOCK } from 'zlib'
import { fadeIn } from '../styles/keyframes'

const rectangle = (theme) =>
  css({
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius,
  })

const liBase = (theme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `1px solid ${theme.color.border}`,
  })

export const styles = (theme) => ({
  mapQuestion: [
    liBase(theme),
    rectangle(theme),
    css({
      label: 'mapQuestion',
      position: 'relative',
      marginBottom: theme.spacing.M,
    }),
  ],
  mapNode: [
    liBase(theme),
    rectangle(theme),
    css({
      label: 'mapNode',
      position: 'unset',
      width: '100%',
      zIndex: 10,
      marginBottom: theme.spacing.M,
      border: `1px solid ${theme.color.border}`,
      WebkitFontSmoothing: 'antialiased',
    }),
  ],
  proNode: css({
    'h3:before': {
      content: '"PRO"',
      position: 'relative',
      top: '-2px',
      marginRight: theme.spacing.XS,
      borderRadius: '4px',
      backgroundColor: theme.color.pro,
      color: '#fff',
      fontFamily: theme.font.paragraph,
      fontWeight: 'bold',
      fontSize: theme.textSize.XXS,
      padding: '4px',
    },
  }),
  conNode: css({
    'h3:before': {
      content: '"CON"',
      position: 'relative',
      top: '-2px',
      marginRight: theme.spacing.XS,
      borderRadius: '4px',
      backgroundColor: theme.color.con,
      color: '#fff',
      fontFamily: theme.font.paragraph,
      fontWeight: 'bold',
      fontSize: theme.textSize.XXS,
      padding: '4px',
    },
  }),
  mapNodeChildren: (multipremise) =>
    css({
      label: 'nodeChildren',
      position: 'absolute',
      left: '100%',
      top: 0,
      listStyleType: 'none',
      width: '100%',
      height: '100%',
      opacity: 0,
      animationName: fadeIn,
      animationDelay: '0.4s',
      animationDuration: '1s',
      animationFillMode: 'forwards',
      li: multipremise
        ? {
            marginBottom: 0,
            borderRadius: 0,
            borderTop: 'none',
            '&:first-of-type': {
              borderRadius: `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0`,
              borderTop: `1px solid ${theme.color.border}`,
            },
            '&:last-of-type': {
              borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
            },
          }
        : {},
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
      borderBottom: detailViewOpen ? `1px solid ${theme.color.border}` : 'none',
      animationName: fadeIn,
      animationDelay: '0.4s',
      animationDuration: '1s',
      cursor: 'pointer',
    }),
  nodeTitle: (detailViewOpen) => ({
    label: 'nodeTitle',
    fontFamily: theme.font.paragraph,
    flexGrow: 2,
    padding: theme.spacing.S,
    margin: 0,
    animationName: fadeIn,
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
      borderTop: `1px solid ${theme.color.border}`,
      borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
    }),
  liHeader: (hasDetails) =>
    css({
      label: 'liHeader',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: hasDetails ? `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0` : theme.shape.borderRadius,
    }),
  detailView: (detailViewOpen) =>
    css({
      label: 'detailView',
      width: '100%',
      maxHeight: detailViewOpen ? '90vh' : '0',
      padding: detailViewOpen ? `${theme.spacing.S} ${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.M}` : 0,
      borderTop: detailViewOpen ? `1px solid ${theme.color.border}` : 'none',
      overflowY: detailViewOpen ? 'hidden' : 'auto',
      transition: 'max-height 1s ease',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.font.paragraph,
      boxShadow: 'inset 0px 1px 5px 1px rgba(212,213,214,1)',
      h4: {
        textAlign: 'center',
        fontWeight: 'bold',
        borderTop: `1px solid ${theme.color.borderLight}`,
        marginTop: theme.spacing.S,
        paddingTop: theme.spacing.S,
      },
      p: {
        margin: `0px auto ${theme.spacing.S} auto`,
      },
    }),
})
