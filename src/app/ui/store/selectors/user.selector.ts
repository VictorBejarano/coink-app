import { createSelector } from "@ngrx/store";
import { UiState } from "../ui.reducers";

export const selectUserFeature = (state: UiState) => state.UserForm;
