import { createReducer, on } from "@ngrx/store";
import { userFormActions } from "../actions";
import { User } from "src/app/features/user";

export interface UserFormState extends Partial<User> {}

export const userInitialState: UserFormState = {};

export const userReducer = createReducer(
  userInitialState,
  on(userFormActions.addPhone, (state, { phone }) => ({
    ...state,
    phone,
  })),
  on(userFormActions.setUser, (state, { user }) => ({
    ...state,
    ...user,
  }))
);
