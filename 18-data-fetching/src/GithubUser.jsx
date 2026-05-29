import { useState, useEffect } from 'react'

function GithubUser({ username }) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!username) return
    setLoading(true)
    setError(null)
    fetch('https://api.github.com/users/' + username)
      .then((res) => {
        if (!res.ok) throw new Error('User not found')
        return res.json()
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [username])

  if (loading) return <li>Loading {username}...</li>
  if (error) return <li>{username}: {error}</li>
  if (!user) return null

  return (
    <li>
      <img src={user.avatar_url} alt={user.login} width={50} height={50} />
      <span>{user.name}</span> (<span>{user.login}</span>)
    </li>
  )
}

export default GithubUser
