import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Reason.scss'

export const Reason = (props) => {
  const { title, evidence } = props

  const [evidenceExpanded, setEvidenceExpanded] = React.useState(false)

  return (
    <div className="reason rectangle">
      <h3>{title}</h3>
      {evidence && evidence.length > 0 && (
        <>
          <p
            className="expand-evidence"
            onClick={() => {
              setEvidenceExpanded(!evidenceExpanded)
            }}
          >
            See evidence {evidenceExpanded ? '-' : '+'}
          </p>
          {evidenceExpanded && (
            <ul className="reason-evidence-list">
              {evidence.map((item) => {
                return <li>{item}</li>
              })}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
