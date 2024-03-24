import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { IonicModule } from "@ionic/angular";
import { SecondaryButtonComponent } from "./components/secondary-button/secondary-button.component";
import { KeyboardPhoneComponent } from "./components/keyboard-phone/keyboard-phone.component";
import { NumberButtonComponent } from "./components/number-button/number-button.component";

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    KeyboardPhoneComponent,
    NumberButtonComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    KeyboardPhoneComponent,
  ],
})
export class SharedModule {}
