import { useParams } from 'react-router-dom'
import GithubUser from './GithubUser.jsx'

// Reads the :username path parameter and renders a GithubUser for it.
function ShowGithubUser() {
  const { username } = useParams()
  return <GithubUser username={username} />
}

export default ShowGithubUser
