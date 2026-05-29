import React from 'react'
import { createRoot } from 'react-dom/client'
import { SWRConfig } from 'swr'
import App from './App.jsx'

// Default fetcher for all useSWR calls, set via SWRConfig.
const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Request failed')
    return res.json()
  })

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
)
