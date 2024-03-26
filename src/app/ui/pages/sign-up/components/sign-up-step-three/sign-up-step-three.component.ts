import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { switchMap, take } from "rxjs";
import { User, UserEntityService } from "src/app/features/user";
import { spinnerActions } from "src/app/ui/store/actions";
import { selectUserFeature } from "src/app/ui/store/selectors/user.selector";
import { UiState } from "src/app/ui/store/ui.reducers";

@Component({
  selector: "app-sign-up-step-three",
  templateUrl: "./sign-up-step-three.component.html",
  styleUrls: ["./sign-up-step-three.component.scss"],
})
export class SignUpStepThreeComponent implements OnInit {
  checkControl: FormControl<boolean>;
  constructor(
    private router: Router,
    private store: Store<UiState>,
    private userEntityService: UserEntityService
  ) {
    this.checkControl = new FormControl<boolean>(
      false,
      Validators.requiredTrue
    );
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(spinnerActions.activate());
    this.store
      .pipe(
        select(selectUserFeature),
        take(1),
        switchMap((user) => {
          return this.userEntityService.add(user as User);
        })
      )
      .subscribe((user) => {
        console.log("User: ", user);
        this.store.dispatch(spinnerActions.deactivate());
        this.router.navigate(["dashboard"]);
      });
  }
}
