import {postRequest} from "./backend";

export const makeLoginRequest = async (data, setToken) => {
  const loginToken = await postRequest("http://localhost:8080/login", data);

  if (loginToken?.token) {
    setToken(loginToken.token);
    return true;
  }

  return false;
}
