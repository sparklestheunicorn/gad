import * as React from 'react'
import classNames from 'classnames'

import '../styles/TitleBlock.scss'

export const TitleBlock = (props) => {
  const { title, subtitle, titleSize, subtitleSize } = props

  return (
    <div className="title-block">
      <h1
        className={classNames(
          { 'text-size-xxs': titleSize == 'xxs' },
          { 'text-size-xs': titleSize == 'xs' },
          { 'text-size-s': titleSize == 's' },
          { 'text-size-m': titleSize == 'm' },
          { 'text-size-l': titleSize == 'l' },
          { 'text-size-xl': titleSize == 'xl' },
        )}
      >
        {title}
      </h1>
      <h2
        className={classNames(
          'text-color-light',
          { 'text-size-xxs': subtitleSize == 'xxs' },
          { 'text-size-xs': subtitleSize == 'xs' },
          { 'text-size-s': subtitleSize == 's' },
          { 'text-size-m': subtitleSize == 'm' },
          { 'text-size-l': subtitleSize == 'l' },
          { 'text-size-xl': subtitleSize == 'xl' },
        )}
      >
        {subtitle}
      </h2>
    </div>
  )
}
