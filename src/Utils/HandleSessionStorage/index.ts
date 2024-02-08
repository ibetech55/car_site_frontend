export const getSessionData = <T>(
  key: string,
  type?: "object" | string
): T | string => {
  const data = sessionStorage.getItem(key);
  if (type === "object") {
    return JSON.parse(data as string) as T;
  }
  return data as string;
};

export const setSessionData = <T>(
  key: string,
  value: T | string,
  type?: "object" | string
): void => {
  if (type === "object") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  sessionStorage.setItem(key, value as string);
};

export const removeSessionData = (key: string): void => {
  sessionStorage.removeItem(key);
};
