export const styles = (theme) => ({
  mapDepthSelector: {
    label: 'mapDepthSelector',
    button: {
      backgroundColor: theme.color.background,
      fontSize: theme.textSize.S,
      width: '25%',
      border: `1px solid ${theme.color.border}`,
    },
  },
  isDisabled: (change, currentDepth, maxDepth) => {
    const disabledMap = {
      down: (depth) => depth <= 0,
      up: (depth, maxDepth) => depth == maxDepth,
    }
    const disabled = disabledMap[change](currentDepth, maxDepth)
    return disabled ? { color: '#ccc' } : { color: theme.color.text }
  },
})
