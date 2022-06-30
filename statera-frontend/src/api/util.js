import {getRequest, postFormDataRequest, postRequest, putRequest} from "./backend";

export const makeLoginRequest = async (data, setToken) => {
  const loginResponse = await postRequest("http://localhost:8080/login", data);

  if (loginResponse?.token) {
    setToken(loginResponse.token);
    return 200;
  }

  return loginResponse.statusCode;
};

export const makeProfileRequest = async (token) => await getRequest("http://localhost:8080/myaccount", token);
export const makeProfileCommentRequest = async (body) => await getRequest("http://localhost:8080/commentProfile", body);
export const makeProfileIDCommentRequest = async (token) => await getRequest("http://localhost:8080/myaccountID", token);

export const makeAllRecipesRequest = async (token) => await getRequest("http://localhost:8080/recipes/all-recipes", token);

export const makeFavoriteRecipesRequest = async (token, id) => await getRequest(`http://localhost:8080/recipes/fav-recipes?id=${id}`, token);

export const makeQueryRecipesRequest = async (body,token) => await putRequest("http://localhost:8080/recipes/recipe-query",body,token);

export const makeRecipesMenuRequest = async (body,token, id) => await postRequest(`http://localhost:8080/recipes/get-menu?id=${id}`, body, token);

export const likeRecipeRequest = async (body,token) => await postRequest("http://localhost:8080/recipes/like", body, token);

export const putEditProfile = async (formData, token) =>{
  const data = new FormData();
  for (const key in formData){
    if (key === "avatar"){
      console.log(formData[key].item(0))
      data.append(key, formData[key].item(0))
    }else {
      data.append(key, formData[key]);
    }
  }


  return await putRequest("http://localhost:8080/editaccount", formData, token );
}

export const putRecipeRating = async (body, token) => await putRequest("http://localhost:8080/ratingRecipe", body, token );

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

  return await postFormDataRequest("http://localhost:8080/recipes/add-recipe", data, token);
}
