import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-primary-button[title]",
  templateUrl: "./primary-button.component.html",
  styleUrls: ["./primary-button.component.scss"],
})
export class PrimaryButtonComponent {
  @Input() public title: string;
  @Input() public disabled: boolean = false;
  @Output() public onClick = new EventEmitter();

  public onSubmit() {
    this.onClick.emit();
  }
}
