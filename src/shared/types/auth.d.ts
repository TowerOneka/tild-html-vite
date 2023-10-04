import "next-auth";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as
//    * a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     expireAt?: string;
//     accessToken?: string;
//     error?: string;
//     user?: User;
//   }

//   interface User {
//     id: number;
//     name: string;
//     surname: string;
//     position: string;
//     nickname: string;
//     activeTask: null; // todo
//     email: string;
//     status: string;
//     userTasks: null; // todo
//     userProjects: null; // todo
//     createdAt: Date;
//   }
// }

declare module "next-auth/core/types" {
  interface User {
    id: number;
    name: string;
    surname: string;
    position: string;
    nickname: string;
    activeTask: null; // todo
    email: string;
    status: string;
    userTasks: null; // todo
    userProjects: null; // todo
    createdAt: Date;
  }

  interface Session {
    expireAt?: string;
    accessToken?: string;
    error?: string;
    user?: User;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    expireAt?: string;
    accessToken?: string;
    error?: string;
  }
}

// declare module "next-auth/session" {
//   interface Session {
//     expireAt?: number;
//     accessToken?: string;
//     error?: string;
//   }
// }
