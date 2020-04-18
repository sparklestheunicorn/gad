import { color } from "./variables";

export const mapDepthSelector = {
  label: 'mapDepthSelector',
  'button': {
    width: '25%',
    border: `1px solid ${color.border}`
  }
}

export const disabled = (change, currentDepth, maxDepth) => {
  const disabledMap = {
    down: (depth) => depth <= 0,
    up: (depth, maxDepth) => depth == maxDepth,
  }
  const isDisabled = disabledMap[change](currentDepth, maxDepth)
  return isDisabled ? { color: color.shadow } : {}
}