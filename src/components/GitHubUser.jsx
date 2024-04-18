import React from "react";
import {useGithubUser} from "./useGithubUser";

export const GitHubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error.message}</p>;
  }

  if (!user) return null;

  return (
    <div>
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <div>
          <h3>{user.name}</h3>
          <p>@{user.login}</p>
        </div>
      </div>
    </div>
  );
};
