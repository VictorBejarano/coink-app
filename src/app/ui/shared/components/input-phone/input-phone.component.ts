import { Component, Input, OnInit, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { KeyboardPhoneComponent } from "../keyboard-phone/keyboard-phone.component";

@Component({
  selector: "app-input-phone",
  templateUrl: "./input-phone.component.html",
  styleUrls: ["./input-phone.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhoneComponent),
      multi: true,
    },
  ],
})
export class InputPhoneComponent implements ControlValueAccessor {
  @Input() placeholder: string;

  value: string = "";
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}

  writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onInputChange(event: any): void {
    this.writeValue(event.target.value);
  }
}
