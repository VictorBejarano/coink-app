import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up-step-one",
  templateUrl: "./sign-up-step-one.component.html",
  styleUrls: ["./sign-up-step-one.component.scss"],
})
export class SignUpStepOneComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      phone: ["", [Validators.required]],
      keyboard: ["", [Validators.required]],
    });
  }
  ngOnInit() {
    this.form.get("keyboard").valueChanges.subscribe((data) => {
      this.form.get("phone").setValue(data);
    });
  }
  onSubmit() {}
}
