import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

/**
 * Modelo estado para analisis de credito.
 */
export interface UiState {
  /**
   * Esquemas para el proceso.
   */
  Spinner: reducers.LoaderState;
}

export const UiReducers: ActionReducerMap<UiState> = {
  Spinner: reducers.spinnerReducer,
};
