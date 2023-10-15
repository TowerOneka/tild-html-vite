import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state: RootState) => state,
  (state) => state.user,
);

export const authStateSelector = createSelector(rootSelector, (state) => state.authStatus);

export const userSelector = createSelector(rootSelector, (state) => state.user);
