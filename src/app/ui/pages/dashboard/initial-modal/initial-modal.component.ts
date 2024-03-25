import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-initial-modal",
  templateUrl: "./initial-modal.component.html",
  styleUrls: ["./initial-modal.component.scss"],
})
export class InitialModalComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  onClose() {
    this.modalController.dismiss();
  }
}
