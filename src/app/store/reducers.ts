import { userConstants } from "@/entities/user/model";
import user from "@/entities/user/model/user";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [userConstants.sliceName]: user,
});
