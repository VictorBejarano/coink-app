import { Gender } from "src/app/features/gender";
import { DocumentType } from "src/app/features/document-type";

export interface User {
  password: string;
  email: string;
  phone: string;
  documentType: DocumentType;
  documentNumber: string;
  expeditionDate: string;
  bornDate: string;
  gender: Gender;
}
