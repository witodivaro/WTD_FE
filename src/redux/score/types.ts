const prefix = "@@score";

export const ActionTypes = {
  FETCH_TOP_USERS_REQUEST: `${prefix}/FETCH_TOP_USERS_REQUEST`,
  FETCH_TOP_USERS_SUCCESS: `${prefix}/FETCH_TOP_USERS_SUCCESS`,
  FETCH_TOP_USERS_FAILURE: `${prefix}/FETCH_TOP_USERS_FAILURE`,
};

export enum SocketEvents {
  updated = "score:updated",
}

export interface ScoreState {
  topUsers: TopUser[];
  isLoading: boolean;
  errors: any;
}

export interface TopUser {
  username: string;
  id: number;
  tasksCount: number;
}

export interface UserInfo {
  tasksCount: string;
  user: {
    id: number;
    username: string;
  };
}
