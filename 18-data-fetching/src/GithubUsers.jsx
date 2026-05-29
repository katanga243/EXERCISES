import { useState } from 'react'
import GithubUser from './GithubUser.jsx'

function GithubUsers() {
  const [input, setInput] = useState('')
  const [usernames, setUsernames] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setUsernames([...usernames, trimmed])
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </ul>
    </div>
  )
}

export default GithubUsers
