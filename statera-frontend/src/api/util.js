import {getRequest, postFormDataRequest, postRequest, putRequest} from "./backend";

const api_url = "https://stateraun.ml"

export const makeLoginRequest = async (data, setToken) => {
  const loginResponse = await postRequest(api_url + "/login", data);

  if (loginResponse?.token) {
    setToken(loginResponse.token);
    return 200;
  }

  return loginResponse.statusCode;
};

export const makeProfileRequest = async (token) => await getRequest(api_url + "/myaccount", token);
export const makeProfileCommentRequest = async (body) => await getRequest(api_url + "/commentProfile", body);

export const makeAllRecipesRequest = async (token) => await getRequest(api_url + "/recipes/all-recipes", token);

//!TODO: Implement query
export const makeFavoriteRecipesRequest = async (token) => await getRequest(api_url + "/recipes/favorite-recipes", token);

export const makeQueryRecipesRequest = async (body,token) => await putRequest(api_url + "/recipes/recipe-query",body,token);

//!TODO: Implement query
export const makeQueryFavoriteRecipesRequest = async (body,token) => await putRequest(api_url + "/recipes/favorite-recipe-query",body,token);

export const putEditProfile = async (body, token) => await putRequest(api_url + "/editaccount", body, token );

export const putRecipeRating = async (body, token) => await putRequest(api_url + "/ratingRecipe", body, token );

export const makeAddRecipeRequest = async (formData, token) => {
  const data = new FormData();

  console.log(formData);

  for (const key in formData) {
    if (key === "ingredients") {
      console.log(key)
      console.log(JSON.stringify(formData[key].map((i) => i.ingredient)))
      data.append(key, JSON.stringify(formData[key].map((i) => i.ingredient)));
    }
    else if (key === "instructions") {
      data.append(key, JSON.stringify(formData[key].map((i) => i.instructionValue)));
    }
    else if(key === "image") {
      data.append(key, formData[key].item(0))
    }
    else {
      data.append(key, formData[key]);
    }
    data.append("ratings", JSON.stringify([]));
  }

  return await postFormDataRequest(api_url + "/recipes/add-recipe", data, token);
}
