import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IonSelect } from "@ionic/angular";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  DocumentTypeEntityService,
  DocumentType,
} from "src/app/features/document-type";
import { Gender, GenderEntityService } from "src/app/features/gender";
import { User } from "../../../../../features/user/domain/entities/user.model";
import { ValidatorsService } from "./validators.service";
import { spinnerActions, userFormActions } from "src/app/ui/store/actions";
import { UiState } from "src/app/ui/store/ui.reducers";
import { Store } from "@ngrx/store";

interface UserForm extends Omit<User, "phone" | "isValid"> {
  confirmEmail: string;
  confirmPassword: string;
}

type UserFormControl = {
  [K in keyof UserForm]: FormControl<UserForm[K] | null>;
};

@Component({
  selector: "app-sign-up-step-two",
  templateUrl: "./sign-up-step-two.component.html",
  styleUrls: ["./sign-up-step-two.component.scss"],
})
export class SignUpStepTwoComponent implements OnInit {
  @ViewChild("typeDoc") imgElement: any;
  @ViewChildren(IonSelect) viewChildren!: QueryList<IonSelect>;
  @Output() next = new EventEmitter();
  form: FormGroup<UserFormControl>;
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  $destroy = new Subject<void>();

  constructor(
    private documentTypeEntityService: DocumentTypeEntityService,
    private genderEntityService: GenderEntityService,
    public validatorsService: ValidatorsService,
    private store: Store<UiState>
  ) {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.form = new FormGroup<UserFormControl>({
      password: new FormControl<string>(null, [
        Validators.required,
        Validators.maxLength(4),
      ]),
      email: new FormControl<string>(null, [Validators.required]),
      documentType: new FormControl<DocumentType>(null, [Validators.required]),
      documentNumber: new FormControl<string>(null, [Validators.required]),
      expeditionDate: new FormControl<string>(null, [Validators.required]),
      bornDate: new FormControl<string>(null, [Validators.required]),
      gender: new FormControl<Gender>(null, [Validators.required]),
      confirmEmail: new FormControl<string>(null, [
        Validators.required,
        this.confirmEmailValidator.bind(this),
      ]),
      confirmPassword: new FormControl<string>(null, [
        Validators.required,
        Validators.maxLength(4),
        this.confirmPasswordValidator.bind(this),
      ]),
    });
  }

  get $documentType(): Observable<DocumentType[]> {
    return this.documentTypeEntityService.entities$;
  }

  get $gender(): Observable<Gender[]> {
    return this.genderEntityService.entities$;
  }

  confirmPasswordValidator(control) {
    return this.validatorsService.confirmPasswordValidator(
      control,
      this.form?.get("password")?.value
    );
  }
  confirmEmailValidator(control) {
    return this.validatorsService.confirmEmailValidator(
      control,
      this.form?.get("email")?.value
    );
  }
  ngOnInit() {
    this.documentTypeEntityService.getAll();
    this.genderEntityService.getAll();
    this.documentTypeEntityService.loading$
      .pipe(takeUntil(this.$destroy))
      .subscribe((loading) => {
        if (loading) {
          this.store.dispatch(spinnerActions.activate());
        } else {
          this.store.dispatch(spinnerActions.deactivate());
        }
      });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.viewChildren.forEach((view: any) => {
        const shadowRoot = (view.el as HTMLElement).shadowRoot;
        if (shadowRoot) {
          const targetElement: any =
            shadowRoot.querySelector(".select-wrapper");
          if (targetElement) {
            targetElement.style.backgroundColor = "transparent";
            targetElement.firstChild.firstChild.style.fontFamily =
              "AvenirLTStd-Medium";
            targetElement.firstChild.firstChild.style.color = "#AAAAAA";
            targetElement.firstChild.firstChild.style.fontSize = "1em";
          }
        }
      });
    }, 100);
  }
  onSubmit() {
    this.store.dispatch(
      userFormActions.setUser({ user: this.form.value as User })
    );
    this.next.emit();
  }
  messageError(control: string) {
    return this.validatorsService.messageError(this.form.get(control));
  }

  tooglePassword() {
    this.hidePassword = !this.hidePassword;
  }
  toogleConfirmPassword() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
}
