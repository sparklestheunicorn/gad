import { css } from '@emotion/core'
import { NONAME } from 'dns'

export const styles = (theme) => ({
  inputContainer: {
    padding: `${theme.spacing.M} 10% 0 10%`,
    marginTop: theme.spacing.S,
  },
  inputRow: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: theme.spacing.S,
  }),
  inputItem: css({
    label: 'inputItem',
    border: `1px solid ${theme.color.border}`,
    padding: theme.spacing.S,
    fontSize: theme.textSize.XXS,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    minHeight: '50px',
    paddingRight: '30px',
    backgroundColor: theme.color.background,
    wordWrap: 'break-word',
    overflowY: 'hidden',
  }),
  newInputItemContainer: css({
    label: 'newInputItemContainer',
    display: 'flex',
    flexDirection: 'row',
    textarea: {
      display: 'inline-block',
      minHeight: '40px',
      width: '100%',
      margin: `0 0 ${theme.spacing.S} 0`,
      padding: theme.spacing.S,
      paddingRight: '30px',
      overflow: 'hidden',
      resize: 'none',
      transition: 'height 0.2s ease',
      fontSize: theme.textSize.XXS,
      boxShadow: 'inset 0px 1px 5px 1px rgba(212,213,214,1)',
    },
  }),
  newInputItemButton: {
    display: 'inline-block',
    width: 'fit-content',
    padding: theme.spacing.M,
  },
})
