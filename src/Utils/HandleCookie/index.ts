import cookie from "js-cookie";

export const getCookie = (key: string): string | undefined=> {
  return cookie.get(key);
};

export const removeCookie = (key: string): void => {
  cookie.remove(key);
};
