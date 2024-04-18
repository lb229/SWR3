import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.status = response.status;
    throw error;
  }

  return response.json();
};

 export const useGithubUser = (username) => {
  const { data: user, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : undefined,
    fetcher
  );

  const loading = !user && !error;

  const refetch = () => {
    console.log('Refetching data...');
    mutate();
  };

  return { user, loading, error, refetch };
};

