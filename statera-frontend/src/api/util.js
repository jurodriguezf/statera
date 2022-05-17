import {getRequest, postRequest, putRequest} from "./backend";

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

export const putEditProfile = async (body, token) => await putRequest("http://localhost:8080/editaccount", body, token )
