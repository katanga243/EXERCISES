import { useState, useCallback, useEffect } from 'react'

// Fetches a Github user and exposes user, error, loading and a fetch function.
function useGithubUser(username) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchUser = useCallback(() => {
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

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return { user, error, loading, fetchUser }
}

export default useGithubUser
