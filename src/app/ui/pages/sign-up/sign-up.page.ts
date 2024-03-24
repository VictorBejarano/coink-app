import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  form: FormGroup;
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      phone: ["", [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  onSubmit() {
    console.log("Hi");
  }
}
