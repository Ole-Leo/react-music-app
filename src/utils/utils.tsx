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
