import * as React from 'react'

export const FadeOut = () => {
  React.useEffect(() => {
    window.requestAnimationFrame(() => {
      var links = document.getElementsByTagName('a')

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => {
          e.preventDefault()
          document.getElementsByClassName('page')[0].animate(
            [
              // keyframes
              { opacity: 1 },
              { opacity: 0 },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            },
          )
          window.setTimeout(() => {
            window.location = e.target.closest('a').href
          }, 200)
        })
      }
    })
  })

  return null
}
