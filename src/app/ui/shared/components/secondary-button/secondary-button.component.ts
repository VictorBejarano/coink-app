import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-secondary-button[title]",
  templateUrl: "./secondary-button.component.html",
  styleUrls: ["./secondary-button.component.scss"],
})
export class SecondaryButtonComponent {
  @Input() public title: string;
  @Output() public click = new EventEmitter();

  public onClick() {
    this.click.emit();
  }
}
