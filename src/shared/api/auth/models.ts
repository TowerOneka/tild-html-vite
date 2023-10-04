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

export type AuthStatus = "initial" | "unauthorized" | "authorized" | "error";
