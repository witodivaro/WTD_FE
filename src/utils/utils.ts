export const isExpired = (date: Date) =>
  new Date(date).getTime() - Date.now() < 0;
