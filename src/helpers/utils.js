export function getHeaders() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
}

export function getHeadersWithAuthToken() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
  };
}

export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(params[property]);

    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  return formBody.join('&');
}

export function setAuthTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
