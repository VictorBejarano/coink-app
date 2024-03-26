import { createActionGroup, props } from "@ngrx/store";
import { User } from "src/app/features/user";

export const userFormActions = createActionGroup({
  source: "User Form",
  events: {
    "Add Phone": props<{ phone: string }>(),
    "Set User": props<{ user: User }>(),
  },
});
