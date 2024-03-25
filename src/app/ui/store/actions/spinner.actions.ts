import { createActionGroup, emptyProps } from "@ngrx/store";

export const spinnerActions = createActionGroup({
  source: "Spinner",
  events: {
    Activate: emptyProps(),
    Deactivate: emptyProps(),
  },
});
