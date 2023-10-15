import { dispatch } from "@/app/store";
import { userActions } from "@/entities/user/model";
// import {logoutUserThunk} from '@/models/user/thunks';
// import { AppStorage, AppStorageKeys } from "@/services/appStorage";

// import { profileActions } from "@/models/profile/slice";

export const forceLogout = () => {
  // delete token for avoid request to api in logout thunk

  localStorage.removeItem("token");

  dispatch(userActions.resetUser());
};
