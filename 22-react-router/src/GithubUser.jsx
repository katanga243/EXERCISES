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

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!user) return null

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width={80} height={80} />
      <h3>{user.name}</h3>
      <p>{user.login}</p>
    </div>
  )
}

export default GithubUser
