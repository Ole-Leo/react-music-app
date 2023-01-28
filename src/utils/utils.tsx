import Cookies from 'js-cookie';

export const removeTokensFromCookies = () => {
  Cookies.remove('access');
  Cookies.remove('refresh');
};

export const parseJWT = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = decodeURIComponent(
    atob(base64Url)
      .split('')
      .map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(base64);
};

export const getJWTExpTime = (token: string) => {
  return new Date(+parseJWT(token).exp * 1000);
};

export const checkJWTExpTime = (token: string) => {
  return new Date() < getJWTExpTime(token);
};

export const getUserIdFromJWT = (token: string) => {
  return parseJWT(token).user_id;
};

export const checkTokensInCookies = () => {
  if (Cookies.get('access') && Cookies.get('refresh')) return true;
  return false;
};
