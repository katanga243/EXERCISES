import useSWR from 'swr'

// Fetches a Github user with SWR. If username is null, the key is null and SWR
// makes no request. Uses the default fetcher provided via SWRConfig. Returns a
// refetch function (mutate) to manually re-fetch the data.
function useGithubUser(username) {
  const key = username ? 'https://api.github.com/users/' + username : null
  const { data, error, isLoading, mutate } = useSWR(key)

  return {
    user: data,
    error,
    loading: isLoading,
    refetch: () => mutate(),
  }
}

export default useGithubUser
