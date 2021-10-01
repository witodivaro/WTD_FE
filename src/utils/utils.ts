export const isExpired = (date: Date) =>
  new Date(date).getTime() - Date.now() < 0;

export const getCookies = () => {
  return document.cookie.split(";").reduce(
    (acc, cookieSet: string) => {
      const [key, value] = cookieSet.replace(/ /g, "").split("=");
      acc[key] = value;
      return acc;
    },
    {} as {
      [cookieName: string]: string;
    }
  );
};
