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
import { FormBuilder, FormGroup } from "@angular/forms";
import { IonSelect } from "@ionic/angular";
import { Observable } from "rxjs";
import { DocumentTypeEntityService, DocumentType } from "src/app/features/document-type";
import { Gender, GenderEntityService } from "src/app/features/gender";

@Component({
  selector: "app-sign-up-step-two",
  templateUrl: "./sign-up-step-two.component.html",
  styleUrls: ["./sign-up-step-two.component.scss"],
})
export class SignUpStepTwoComponent implements OnInit {
  @ViewChild("typeDoc") imgElement: any;
  @ViewChildren(IonSelect) viewChildren!: QueryList<IonSelect>;
  @Output() next = new EventEmitter();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private documentTypeEntityService: DocumentTypeEntityService,
    private genderEntityService: GenderEntityService
  ) {
    this.form = this.formBuilder.group({
      firstName: [""],
    });
  }

  get $documentType(): Observable<DocumentType[]> {
    return this.documentTypeEntityService.entities$;
  }

  get $gender(): Observable<Gender[]> {
    return this.genderEntityService.entities$;
  }

  ngOnInit() {
    this.documentTypeEntityService.getAll();
    this.genderEntityService.getAll();
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
            console.log();
          }
        }
      });
    }, 100);
  }

  onSubmit() {
    this.next.emit();
  }
}
