import { Component } from "@angular/core";
import { SplashScreen } from "@capacitor/splash-screen";
import { UiState } from "./ui/store/ui.reducers";
import { Store, select } from "@ngrx/store";
import { spinnerStateSelector } from "./ui/store/selectors";
import { Observable } from "rxjs";
/**
 * Componente de la aplicacion.
 */
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  /**
   * Observable estado del spinner.
   */
  public $isActive: Observable<boolean>;
  /**
   * Crea una instancia de AppComponent.
   * @param store - Instancia del store.
   */
  public constructor(private store: Store<UiState>) {
    this.initializeApp();
    this.$isActive = this.store.pipe(select(spinnerStateSelector));
  }
  /**
   * Detiene el splash screen.
   */
  public initializeApp() {
    SplashScreen.hide();
  }
}
