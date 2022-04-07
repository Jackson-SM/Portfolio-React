import React, {useState, useEffect, createContext } from 'react';

export const ApiGithubContext = createContext();

export function ApiGithubProvider({children}) {

  const [userGithub,setUserGithub] = useState({});
  const [repositories,setRepositories] = useState([]);

  useEffect(() => {
    async function userGithub(){
      const responseJson = await fetch('https://api.github.com/users/Jackson-SM');
      const response = await responseJson.json();
      await setUserGithub(response);
    }
    userGithub();
  },[])

  useEffect(() => {
    if(!!userGithub.repos_url) {
      async function repositoriesGithub(){
        const responseJson = await fetch(userGithub.repos_url);
        const response = await responseJson.json();
        await setRepositories(response);
      }
      repositoriesGithub();
    }
  },[userGithub])

  return (
    <ApiGithubContext.Provider
      value={{
        userGithub,
        repositories
      }}
    >
      {children}
    </ApiGithubContext.Provider>
  );
} 