import React from 'react'

const CollapsibleSection = ({ title = null, contentExists, children }) => {
  const [open, setOpen] = React.useState(false)

  return contentExists ? (
    <>
      {title && (
        <h4
          onClick={() => {
            setOpen(!open)
          }}
        >
          {title}
        </h4>
      )}
      {open && children}
    </>
  ) : null
}

export default CollapsibleSection
