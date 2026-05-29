import { useState } from 'react'

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false)

  const containerStyle = {
    backgroundColor: 'white',
    border: '2px solid red',
    padding: '0.5rem 1rem',
    margin: '1rem 0',
  }

  const titleStyle = {
    cursor: 'pointer',
    userSelect: 'none',
  }

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle} onClick={() => setCollapsed(!collapsed)}>
        {title}
      </h3>
      {!collapsed && <div>{children}</div>}
    </div>
  )
}

export default Container
