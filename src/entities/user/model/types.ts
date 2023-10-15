export type User = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  username: string;
  activeTask: null; // todo
  email: string;
  status: string;
  userTasks: null; // todo
  userProjects: null; // todo
  createdAt: Date;
  fingerprint: string;
};

export type AuthStatus = "init" | "loading" | "authorized" | "unauthorized" | "error";

export type UserState = {
  user: User | null;
  authStatus: AuthStatus;
};
