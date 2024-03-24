import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-number-button[value]",
  templateUrl: "./number-button.component.html",
  styleUrls: ["./number-button.component.scss"],
})
export class NumberButtonComponent implements OnInit {
  private _value: number;
  @Input() set value(val: string | number) {
    if (typeof val === "string") {
      this._value = Number(val);
    } else {
      this._value = val;
    }
  }

  constructor() {}

  get value() {
    return this._value;
  }

  ngOnInit() {}
}
