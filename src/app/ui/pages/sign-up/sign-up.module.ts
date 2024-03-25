import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SignUpPageRoutingModule } from "./sign-up-routing.module";

import { SignUpPage } from "./sign-up.page";
import { SharedModule } from "../../shared/shared.module";
import { SignUpStepOneComponent } from "./components/sign-up-step-one/sign-up-step-one.component";
import { StepperIndicatorComponent } from "./components/stepper-indicator/stepper-indicator.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [SignUpPage, SignUpStepOneComponent, StepperIndicatorComponent],
})
export class SignUpPageModule {}
