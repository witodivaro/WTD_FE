const prefix = "@@user";

export const ActionTypes = {
  SET_USER: `${prefix}/SET_USER`,
};

export interface User {
  username: string;
  email: string;
}

export interface UserState {
  user: User | null;
}

export interface ISetUser {
  type: string;
  payload: {
    user: User;
  };
}
