import GithubUsers from './GithubUsers.jsx'

/*
  Data Fetching with fetch and useEffect exercise

  GithubUser receives a username prop and fetches that user's data from the
  Github API inside a useEffect (running whenever username changes). It renders
  the user's name, login and avatar.

  GithubUsers renders a form (text input + submit) to search a user by username.
  Each searched username is added to a list and rendered as a GithubUser item.

  useEffect is used so the network request runs as a side effect after render,
  not during rendering.
*/

function App() {
  return (
    <div>
      <h1>Github Users</h1>
      <GithubUsers />
    </div>
  )
}

export default App
