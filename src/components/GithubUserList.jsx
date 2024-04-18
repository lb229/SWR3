import React, { useState } from 'react';
import { GitHubUser } from './GitHubUser';
import {useGithubUser} from './useGithubUser';

export const GithubUserList = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const { refetch: refetchUser } = useGithubUser(username); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([username]);
   
  };

  const handleRefresh = () => {
    refetchUser();
    console.log(username)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name='inputUsername'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Github Username"
        />
         <button type="submit">Search</button> 
      </form>

    <span><button onClick={handleRefresh}>Refresh</button> </span>  
     
      {users.map((user, index) => (
        <GitHubUser key={index} username={user} />
      ))}
    </div>
  );
};