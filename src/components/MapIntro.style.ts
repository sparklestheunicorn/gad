import { css } from '@emotion/core'

export const styles = (theme) => ({
  mapIntroContainer: theme.mq({
    label: 'mapIntroContainer',
    height: '100%',
    width: ['100%', '40%', '40%'],
    marginRight: '4px',
    paddingLeft: [`${theme.spacing.M}`, '0px', '0px'],
    paddingRight: [theme.spacing.L, theme.spacing.M, theme.spacing.M],
    position: [`absolute`, 'relative', 'relative'],
    zIndex: 100,
    backgroundColor: theme.color.background,
    h3: {
      padding: 0,
    },
    button: {
      display: ['inline-block', 'none', 'none'],
    },
    p: {
      fontFamily: theme.font.paragraph,
    },
  }),
  introHeader: {
    label: 'introHeader',
    fontSize: theme.textSize.M,
  },
  linkLine: css({
    label: 'linkLine',
    fontWeight: 'bold',
  }),
  link: {
    label: 'link',
    textDecoration: 'underline',
  },
})
