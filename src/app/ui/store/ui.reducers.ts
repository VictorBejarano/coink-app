import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

export interface UiState {
  Spinner: reducers.LoaderState;
  UserForm: reducers.UserFormState;
}

export const UiReducers: ActionReducerMap<UiState> = {
  Spinner: reducers.spinnerReducer,
  UserForm: reducers.userReducer,
};
