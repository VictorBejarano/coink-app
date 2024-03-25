import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-stepper-indicator[step]",
  templateUrl: "./stepper-indicator.component.html",
  styleUrls: ["./stepper-indicator.component.scss"],
})
export class StepperIndicatorComponent {
  @Input() step: number;
}
