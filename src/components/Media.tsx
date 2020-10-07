/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { styles } from './Media.style'

const getYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  return match && match[2].length === 11 ? match[2] : null
}

// type 10 is an image, type 20 is a video
const Media = ({ type, url, description, name }) => {
  const theme: Theme = useTheme()
  const s = styles(theme)
  return (
    <>
      <p css={s.p}>{name}</p>
      {type === 10 ? (
        <img src={url} alt={description} />
      ) : (
        <iframe
          css={s.iframe}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${getYoutubeId(url)}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </>
  )
}

export default Media
