import React, {useState, useEffect, createContext } from 'react';

export const ApiGithubContext = createContext();

export function ApiGithubProvider({children}) {

  const [userGithub,setUserGithub] = useState({});

  useEffect(() => {
    async function apiConsumer(){
      const responseJson = await fetch('https://api.github.com/users/Jackson-SM');
      const response = await responseJson.json();
      await setUserGithub(response);
    }
    apiConsumer();
  },[])

  return (
    <ApiGithubContext.Provider
      value={{
        userGithub
      }}
    >
      {children}
    </ApiGithubContext.Provider>
  );
} 