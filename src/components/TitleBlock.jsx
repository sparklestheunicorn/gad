import * as React from 'react'

import '../styles/TitleBlock.scss'

export const TitleBlock = (props) => {
  const { title, subtitle } = props

  return (
    <div className="title-block">
      <h1>{title}</h1>
      <h2 className="text-color-light">{subtitle}</h2>
    </div>
  )
}
