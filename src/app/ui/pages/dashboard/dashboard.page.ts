import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { InitialModalComponent } from "./components/initial-modal/initial-modal.component";
import { UiState } from "../../store/ui.reducers";
import { Store } from "@ngrx/store";
import { User } from "src/app/features/user";
import { Observable } from "rxjs";
import { selectUserFeature } from "../../store/selectors/user.selector";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  $userForm: Observable<User>;
  constructor(
    private modalController: ModalController,
    private store: Store<UiState>
  ) {
    this.$userForm = this.store.select(selectUserFeature) as Observable<User>;
  }
  async ngOnInit() {
    const modal = await this.modalController.create({
      component: InitialModalComponent, // Aquí debes pasar el componente de tu modal
    });
    await modal.present();
  }
}
