import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class ValidatorsService {
  confirmPasswordValidator(control: FormControl, password: string) {
    const confirmPassword = control?.value;

    if (confirmPassword === password) {
      return null;
    } else {
      return { confirmPasswordMismatch: true };
    }
  }
  confirmEmailValidator(control: FormControl, email: string) {
    const confirmEmail = control?.value;

    if (confirmEmail === email) {
      return null;
    } else {
      return { confirmEmailMismatch: true };
    }
  }
  messageError(control: AbstractControl) {
    const errors = control.errors ?? {};
    if ("required" in errors) {
      return "El valor es requerido";
    }
    if ("email" in errors) {
      return "Correo invalido";
    }
    if ("confirmPasswordMismatch" in errors) {
      return "Este campo no coincide con el PIN";
    }
    if ("confirmEmailMismatch" in errors) {
      return "Los correos electronicos no coincide";
    }
    if ("maxlength" in errors) {
      return `La longitud maxima es de ${errors.maxlength.requiredLength} caracteres`;
    }
    return null;
  }
}
