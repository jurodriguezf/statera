import { useState } from 'react';

export default function useToken() {
  const getSessionToken = () => {
    const tokenString = sessionStorage.getItem("token");
    return JSON.parse(tokenString);
  }

  const [token, setToken] = useState(getSessionToken());

  const saveSessionToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  }

  return {
    setToken: saveSessionToken,
    token
  }
}
