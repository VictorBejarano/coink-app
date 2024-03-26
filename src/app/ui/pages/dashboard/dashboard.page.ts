import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { InitialModalComponent } from "./components/initial-modal/initial-modal.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  constructor(private modalController: ModalController) {}

  async ngOnInit() {
    const modal = await this.modalController.create({
      component: InitialModalComponent, // Aquí debes pasar el componente de tu modal
    });
    await modal.present();
  }
}
