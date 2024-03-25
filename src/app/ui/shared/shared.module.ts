import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { IonicModule } from "@ionic/angular";
import { SecondaryButtonComponent } from "./components/secondary-button/secondary-button.component";
import { KeyboardPhoneComponent } from "./components/keyboard-phone/keyboard-phone.component";
import { NumberButtonComponent } from "./components/number-button/number-button.component";
import { InputPhoneComponent } from "./components/input-phone/input-phone.component";

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    KeyboardPhoneComponent,
    NumberButtonComponent,
    InputPhoneComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    KeyboardPhoneComponent,
    InputPhoneComponent,
  ],
})
export class SharedModule {}
