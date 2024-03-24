import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { IonicModule } from "@ionic/angular";
import { SecondaryButtonComponent } from "./components/secondary-button/secondary-button.component";

@NgModule({
  declarations: [PrimaryButtonComponent, SecondaryButtonComponent],
  imports: [IonicModule, CommonModule],
  exports: [PrimaryButtonComponent, SecondaryButtonComponent],
})
export class SharedModule {}
