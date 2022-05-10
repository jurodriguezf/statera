export const postRequest = async (url, body) => {
  const response = await fetch(
    url, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  ).catch(err => console.error(err));

  return response?.json();
}
