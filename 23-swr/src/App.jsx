import { useState } from 'react'
import useGithubUser from './useGithubUser.js'

/*
  Data fetching with SWR exercise

  useGithubUser now uses useSWR to fetch a Github user. The SWR key is null when
  no username is provided, so no request is made. It uses the default fetcher set
  by SWRConfig (in index.jsx) and exposes a refetch function (mutate) to manually
  re-fetch the data.
*/

function App() {
  const [username, setUsername] = useState('octocat')
  const { user, error, loading, refetch } = useGithubUser(username)

  return (
    <div>
      <h1>Data fetching with SWR</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={refetch}>Refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={80} height={80} />
          <h3>{user.name}</h3>
          <p>{user.login}</p>
        </div>
      )}
    </div>
  )
}

export default App
