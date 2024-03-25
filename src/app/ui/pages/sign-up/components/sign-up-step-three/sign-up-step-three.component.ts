import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-step-three",
  templateUrl: "./sign-up-step-three.component.html",
  styleUrls: ["./sign-up-step-three.component.scss"],
})
export class SignUpStepThreeComponent implements OnInit {
  checkControl: FormControl<boolean>;
  constructor(private router: Router) {
    this.checkControl = new FormControl<boolean>(
      false,
      Validators.requiredTrue
    );
  }

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(["dashboard"]);
  }
}
