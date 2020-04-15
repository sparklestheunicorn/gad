import * as React from 'react'
import classNames from 'classnames'

export const MapDepthSelector = (props) => {
  const { currentDepth, maxDepth, zeroMapDepth, decreaseMapDepth, increaseMapDepth, maximizeMapDepth } = props

  return (
    <div className="map-depth-selector">
      <button onClick={zeroMapDepth} className={classNames('reset-map-depth-button', { disabled: currentDepth <= 0 })}>
        ◄◄
      </button>
      <button
        onClick={decreaseMapDepth}
        className={classNames('decrease-map-depth-button', { disabled: currentDepth <= 0 })}
      >
        ◄
      </button>
      <button
        onClick={increaseMapDepth}
        className={classNames('increase-map-depth-button', { disabled: currentDepth == maxDepth })}
      >
        ►
      </button>
      <button
        onClick={maximizeMapDepth}
        className={classNames('max-map-depth-button', { disabled: currentDepth == maxDepth })}
      >
        ►►
      </button>
    </div>
  )
}
