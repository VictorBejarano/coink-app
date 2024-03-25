import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  public stepSelected: number;
  constructor(private navCtrl: NavController) {
    this.stepSelected = 1;
  }
  ngOnInit(): void {}

  goBack() {
    this.navCtrl.back();
  }

  onSubmit() {
    console.log("Hi");
  }
}
