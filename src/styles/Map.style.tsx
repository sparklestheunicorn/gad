export const bgPosition = depth => ({
  backgroundPositionX: `calc(100% - ${depth *30}px)`
})

export const transform = depth => ({
  transform: `translateX(${-40 * depth + 4}%)`
})