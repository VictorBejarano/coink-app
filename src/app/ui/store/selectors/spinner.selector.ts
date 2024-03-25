import { createSelector } from "@ngrx/store";
import { UiState } from "../ui.reducers";

export const selectSpinnerFeature = (state: UiState) => state.Spinner;

export const spinnerStateSelector = createSelector(
  selectSpinnerFeature,
  (state) => state.isActive
);
