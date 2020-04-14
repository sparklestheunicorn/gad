import * as React from 'react'

export const MapDepthSelector = (props) => {
  const { zeroMapDepth, decreaseMapDepth, increaseMapDepth, maximizeMapDepth } = props

  return (
    <div className="map-depth-selector">
      <button onClick={zeroMapDepth} className="reset-map-depth-button">
        ◄◄
      </button>
      <button onClick={decreaseMapDepth} className="decrease-map-depth-button">
        ◄
      </button>
      <button onClick={increaseMapDepth} className="increase-map-depth-button">
        ►
      </button>
      <button onClick={maximizeMapDepth} className="max-map-depth-button">
        ►►
      </button>
    </div>
  )
}
