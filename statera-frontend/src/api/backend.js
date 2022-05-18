export const postRequest = async (url, body, token) => {
  const response = await fetch(
    url, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token || "",
      },
      body: JSON.stringify(body)
    }
  ).catch(err => console.error(err));

  return response?.json();
}

export const putRequest = async (url, body, token) => {
    const response = await fetch(
        url, {
            method: "PUT",
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token || "",
            },
            body: JSON.stringify(body)
        }
    ).catch(err => console.error(err));

    return response?.json();
}

export const getRequest = async (url, token) => {
  const response = await fetch(
    url, {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token || "",
      },
    }
  ).catch(err => console.error(err));

  return response?.json();
}
