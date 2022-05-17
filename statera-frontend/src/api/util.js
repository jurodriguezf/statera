import {getRequest, postRequest} from "./backend";

export const makeLoginRequest = async (data, setToken) => {
  const loginToken = await postRequest("http://localhost:8080/login", data);

  if (loginToken?.token) {
    setToken(loginToken.token);
    return true;
  }

  return false;
};

export const makeProfileRequest = async (token) => await getRequest("http://localhost:8080/myaccount", token);

export const makeAllRecipesRequest = async (token) => await getRequest("http://localhost:8080/recipes/all-recipes", token);
