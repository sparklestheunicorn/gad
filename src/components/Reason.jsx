import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Reason.scss'

export const Reason = (props) => {
  const { title, ctaUrl } = props

  return (
    <div className="reason rectangle">
      {ctaUrl && <Link to={ctaUrl}>Explore ></Link>}
      <h3>{title}</h3>
    </div>
  )
}
