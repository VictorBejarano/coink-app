import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SplashScreen } from "@capacitor/splash-screen";
import { UiState } from "./ui/store/ui.reducers";
import { Store, select } from "@ngrx/store";
import { spinnerStateSelector } from "./ui/store/selectors";
import { Observable } from "rxjs";
import { spinnerActions } from "./ui/store/actions";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  $isActive: Observable<boolean>;
  constructor(private store: Store<UiState>) {
    this.initializeApp();
    this.$isActive = this.store.pipe(select(spinnerStateSelector));
  }

  initializeApp() {
    SplashScreen.hide();
  }
}
