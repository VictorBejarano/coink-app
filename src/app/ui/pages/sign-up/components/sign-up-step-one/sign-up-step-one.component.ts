import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { switchMap, take } from "rxjs";
import { UserEntityService } from "src/app/features/user";
import { spinnerActions } from "src/app/ui/store/actions";
import { UiState } from "src/app/ui/store/ui.reducers";

@Component({
  selector: "app-sign-up-step-one",
  templateUrl: "./sign-up-step-one.component.html",
  styleUrls: ["./sign-up-step-one.component.scss"],
})
export class SignUpStepOneComponent implements OnInit {
  @Output() next = new EventEmitter();
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<UiState>,
    private userEntityService: UserEntityService
  ) {
    this.form = this.formBuilder.group({
      phone: ["", [Validators.required]],
      keyboard: [
        "",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  ngOnInit() {
    this.form.get("keyboard").valueChanges.subscribe((data) => {
      this.form.get("phone").setValue(data);
    });
  }
  onSubmit() {
    this.store.dispatch(spinnerActions.activate());
    this.userEntityService
      .validatePhone(this.form.get("keyboard").value)
      .pipe(take(1))
      .subscribe((isValid) => {
        if (isValid) {
          this.store.dispatch(spinnerActions.deactivate());
          this.next.emit();
        }
      });
  }
}
