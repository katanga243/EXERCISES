import { Routes, Route, Link } from 'react-router-dom'
import Welcome from './Welcome.jsx'
import Counter from './Counter.jsx'
import ShowGithubUser from './ShowGithubUser.jsx'
import GithubUserList from './GithubUserList.jsx'

/*
  React Router exercise

  App is wrapped in BrowserRouter (in index.jsx) and defines the routes:
  - '/'              -> Welcome (with a name prop)
  - '/counter'       -> Counter
  - '/users'         -> GithubUserList (fetches the users and links to each)
      index route    -> 'Add a user and select it' message
      ':username'    -> ShowGithubUser (reads the username path param)
  - '*'              -> Not Found

  Link components navigate without a full page reload.
*/

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{' '}
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Develhope" />} />
        <Route path="/counter" element={<Counter initialValue={0} increment={1} />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
