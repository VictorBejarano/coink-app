import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-keyboard-phone",
  templateUrl: "./keyboard-phone.component.html",
  styleUrls: ["./keyboard-phone.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyboardPhoneComponent),
      multi: true,
    },
  ],
})
export class KeyboardPhoneComponent implements ControlValueAccessor {
  @Output() public submit = new EventEmitter<string>();
  @Input() disabledSubmitBtn: boolean;
  value: string = "";
  onChange: (_: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: (_: string) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
  addDigit(digit: string) {
    this.value += digit;
    this.onChange(this.value);
    this.onTouched();
  }
  deleteDigit() {
    if (this.value !== "") {
      this.value = this.value.slice(0, -1);
      this.onChange(this.value);
      this.onTouched();
    }
  }
  onSubmit() {
    this.submit.emit(this.value);
  }
}
