import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

// Fetches the list of Github users and shows each username as a link. Clicking a
// username navigates to the nested /users/:username route (rendered via Outlet).
function GithubUserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setUsers([]))
  }, [])

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.login}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default GithubUserList
