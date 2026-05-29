import { useState } from 'react'
import useCounter from './useCounter.js'
import useForm from './useForm.js'
import useGithubUser from './useGithubUser.js'
import useCurrentLocation from './useCurrentLocation.js'

/*
  Custom Hooks exercise

  Custom hooks let us extract stateful logic into reusable functions:
  - useCounter: counter value + increment/decrement/reset.
  - useForm: controlled username/password values + a change handler.
  - useGithubUser: fetches a Github user and returns user/error/loading + fetch fn.
  - useCurrentLocation: uses navigator.geolocation to get the current location.

  A hook is just a function whose name starts with 'use' and that may call
  other hooks (useState, useEffect, etc.).
*/

function App() {
  const { count, increment, decrement, reset } = useCounter(0)
  const { values, handleChange } = useForm()
  const [searchedUser, setSearchedUser] = useState('octocat')
  const { user, error, loading } = useGithubUser(searchedUser)
  const location = useCurrentLocation()

  return (
    <div>
      <h1>Custom Hooks</h1>

      <section>
        <h2>useCounter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </section>

      <section>
        <h2>useForm</h2>
        <input name="username" value={values.username} onChange={handleChange} placeholder="username" />
        <input name="password" type="password" value={values.password} onChange={handleChange} placeholder="password" />
        <p>Username: {values.username}</p>
      </section>

      <section>
        <h2>useGithubUser</h2>
        <input value={searchedUser} onChange={(e) => setSearchedUser(e.target.value)} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && <p>{user.name} ({user.login})</p>}
      </section>

      <section>
        <h2>useCurrentLocation</h2>
        <button onClick={location.getCurrentLocation}>Get location</button>
        {location.loading && <p>Locating...</p>}
        {location.error && <p>{location.error}</p>}
        {location.location && (
          <p>Lat: {location.location.latitude}, Lng: {location.location.longitude}</p>
        )}
      </section>
    </div>
  )
}

export default App
