import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SignUpPageRoutingModule } from "./sign-up-routing.module";

import { SignUpPage } from "./sign-up.page";
import { SharedModule } from "../../shared/shared.module";
import { SignUpStepOneComponent } from "./components/sign-up-step-one/sign-up-step-one.component";
import { StepperIndicatorComponent } from "./components/stepper-indicator/stepper-indicator.component";
import { SignUpStepTwoComponent } from "./components/sign-up-step-two/sign-up-step-two.component";
import { SignUpStepThreeComponent } from "./components/sign-up-step-three/sign-up-step-three.component";
import { DocumentTypeModule } from "src/app/features/document-type";
import { GenderModule } from "src/app/features/gender";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DocumentTypeModule,
    GenderModule,
  ],
  declarations: [
    SignUpPage,
    SignUpStepOneComponent,
    SignUpStepTwoComponent,
    SignUpStepThreeComponent,
    StepperIndicatorComponent,
  ],
})
export class SignUpPageModule {}
