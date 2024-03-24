import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-number-button[value]",
  templateUrl: "./number-button.component.html",
  styleUrls: ["./number-button.component.scss"],
})
export class NumberButtonComponent implements OnInit {
  private _value: string;
  @Input() set value(val: string | number) {
    if (typeof val === "string") {
      this._value = val;
    } else {
      this._value = val.toString();
    }
  }

  constructor() {}

  get value() {
    return this._value;
  }

  ngOnInit() {}
}
