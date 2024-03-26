import { createReducer, on } from "@ngrx/store";
import { spinnerActions } from "../actions";

export interface LoaderState {
  isActive: boolean;
}

export const spinnerInitialState: LoaderState = {
  isActive: false,
};

export const spinnerReducer = createReducer(
  spinnerInitialState,
  on(spinnerActions.activate, (state) => ({
    ...state,
    isActive: true,
  })),
  on(spinnerActions.deactivate, (state) => ({
    ...state,
    isActive: false,
  }))
);
